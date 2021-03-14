const { response } = require('../app');
const Client = require('../models/client');

class ClientController {
  async get(res) {
    const clientsA = await Client.find().catch(error => {
      res.status(500).json(this.notification(false, 'Server error', null, []));
    });

    res.status(200).json(this.notification(true, 'Clients list found', clientsA, undefined));
  }

  async getClient(req, res) {
    console.log(req);
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
      res.status(200).json(this.notification(true, 'Client update', client, undefined));
    } else {
      res.status(404).json(this.notification(false, 'Client not found', client, undefined));
    }
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