const { response } = require('../app');
const Client = require('../models/client');
const MailService = require('../services/MailService');

class ClientController {
  async get(res) {
    const clientsA = await Client.find().catch(error => {
      res.status(500).json(this.notification(false, 'Server error', null, []));
    });

    res.status(200).json(this.notification(true, 'Clients list found', clientsA, undefined));
  }

  async getClient(req, res) {
    const client = await Client.findOne(
      {
        document: req.document,
        phone: req.phone
      }
    ).exec();
    if(client){
      res.status(200).json(this.notification(true, 'Client found', client, undefined));
    } else {
      res.status(404).json(this.notification(false, 'Client not found', client, undefined));
    }
  }

  async store(req, res) {
    const client = new Client(req);

    client.save(function (err) {
      if (err) return console.log(err);
    });
    
    res.status(200).json(this.notification(true, 'The new client has been successfully registered', client, undefined));
  }

  async recharge(req, res) {
    const client = await Client.findOne(
      {
        document: req.document,
        phone: req.phone
      },
    ).exec();

    if(client){
      client.balance += req.value;
      client.save();
      res.status(200).json(this.notification(true, 'Client update', undefined, undefined));
    } else {
      res.status(404).json(this.notification(false, 'Client not found', undefined, undefined));
    }
  }

  async pay(req, res) {
    const client = await Client.findOne(
      {
        document: req.document,
        phone: req.phone
      },
    ).exec();
    if(client){
      if(client.balance > req.value){
        var token = Math.random().toString(36).substring(2,8) 
        client.pays.push({
          date:  new Date(),
          value: req.value,
          token: token,
          processed: false
        });
        client.save();

        var mail = new MailService(client.id, client.pays[client.pays.length - 1]._id, client.email, token);
        mail.send();

        res.status(200).json(this.notification(true, 'Payment in process, an email has been sent with the session id that must be used in the purchase confirmation', undefined, undefined));
      } else {
        res.status(200).json(this.notification(true, 'payment not processed, you do not have enough balance for this payment', undefined, undefined));
      }
    } else {
      res.status(404).json(this.notification(false, 'Client not found', undefined, undefined));
    }
  }

  async confirm(id, payId, req, res) {
    const client = await Client.findById(id).exec();
    
    var token = req.code;

    if(!client){
      return res.status(404).json(this.notification(false, 'Client not found', undefined, undefined));
    }

    const pay = await client.pays.find( pay => pay._id.toString() == payId && pay.token == token);

    if(!pay) {
      return res.status(404).json(this.notification(false, 'Pay not found', client, undefined));
    }

    if(pay.processed) {
      return res.status(200).json(this.notification(true, 'Payment has already been processed', pay, undefined));
    }


    if(client.balance < pay.value) {
      return res.status(200).json(this.notification(true, 'payment not processed, you do not have enough balance for this payment', pay, undefined));
    }

    pay.processed = true;
    client.balance -= pay.value;
    client.save()
    
    return res.status(200).json(this.notification(true, 'Payment processed successfully', undefined, undefined));
  }

  notification(ifSuccess, msg, response, error) {
    return {
      success: ifSuccess,
      message: msg,
      data: response,
      errors: error,
    };
  }
}
  
module.exports = new ClientController();