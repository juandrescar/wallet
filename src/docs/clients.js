/**
 * @api {get} /clients Client list
 * @apiName getClient
 * @apiGroup Clients 
 *
 * @apiSuccess {Boolean} success field indicating if the request was successful (true)
 * @apiSuccess {String} message Request message
 * @apiSuccess {Array} data List of stored tasks
 
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
    "success": true,
    "message": "Clients list found",
    "data": [
      {
        "document": "123",
        "name": "Juan 2",
        "email": "a@a.com",
        "phone": "+5804143954723",
        "balance": 10,
        "_id": "604e7307cac360704ce81c49",
        "pays": [
          {
            "_id": "604e7337cac360704ce81c4a",
            "date": "2021-03-14T20:33:59.910Z",
            "value": 5,
            "token": "htznqb",
            "processed": true
          },
          {
            "_id": "604e838d42d9d28393fae547",
            "date": "2021-03-14T21:43:41.219Z",
            "value": 5,
            "token": "zav9sw",
            "processed": true
          }
        ],
        "created_at": "2021-03-14T20:33:11.747Z",
        "updated_at": "2021-03-14T20:33:11.747Z",
        "__v": 2,
        "id": "604e7307cac360704ce81c49"
      },
      {
        "document": "1234",
        "name": "Koyag",
        "email": "gajomensal@gmail.com",
        "phone": "1234",
        "balance": 45,
        "_id": "6050bf58f5c6f146a4c6ffa1",
        "pays": [
          {
            "_id": "6050ce920938b56ac081682b",
            "date": "2021-03-16T15:28:18.047Z",
            "value": 5,
            "token": "q64b22",
            "processed": false
          },
          {
            "_id": "6050f0b61c15578322c99204",
            "date": "2021-03-16T17:53:58.325Z",
            "value": 5,
            "token": "yqdwqe",
            "processed": false
          },
          {
            "_id": "6050f0f99ae38083b3b6ff0e",
            "date": "2021-03-16T17:55:05.520Z",
            "value": 5,
            "token": "18r8pu",
            "processed": true
          }
        ],
        "created_at": "2021-03-16T14:23:20.963Z",
        "updated_at": "2021-03-16T14:23:20.963Z",
        "__v": 3,
        "id": "6050bf58f5c6f146a4c6ffa1"
      }
  ]
}
 * @apiSuccessExample {JSON} Without records
 * HTTP/1.1 200 Success without clients
 * {
      "success": true,
      "message": "Clients list found",
      "data": []
    }
 * @apiError {String} msg Error description.
 * @apiError {Boolean} success field indicating that there was a failure in the request (false).
 * @apiError {Array} errors error list.
 * @apiErrorExample {JSON} Internal Server Error
 * HTTP/1.1 500 Internal Server Error
 * {
    "success": false,
    "message": "Server error",
    "data": null,
    "errors": []
  }
 */

/**
 * @api {post} /clients Register Client
 * @apiName registerClient
 * @apiGroup Clients 
 * 
 * @apiParam {String} name client name
 * @apiParam {String} email client email
 * @apiParam {string} phone client phone
 * @apiParam {string} document client document
 *
 * @apiSuccess {Boolean} success field indicating if the request was successful (true)
 * @apiSuccess {String} message Request message
 * @apiSuccess {Array} data List of stored tasks
 
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
    "success": true,
    "message": "The new client has been successfully registered",
    "data": {
        "document": "1235",
        "name": "Juan",
        "email": "a@a.com",
        "phone": "+5804143954723",
        "balance": 0,
        "_id": "605104bbf838229459d7226a",
        "pays": [],
        "created_at": "2021-03-16T19:19:23.878Z",
        "updated_at": "2021-03-16T19:19:23.878Z",
        "id": "605104bbf838229459d7226a"
    }
  }
 * @apiError {String} msg Error description.
 * @apiError {Boolean} success field indicating that there was a failure in the request (false).
 * @apiError {Array} errors error list.
 * @apiErrorExample {JSON} Internal Server Error
 * HTTP/1.1 500 Internal Server Error
 * {
    "success": false,
    "message": "Server error",
    "data": null,
    "errors": []
  }
* @apiErrorExample {JSON} Unprocessable Entity
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "success": false,
    "message": "Unprocessable Entity",
    "errors": [
        {
            "msg": "Invalid value",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Invalid value",
            "param": "name",
            "location": "body"
        },
        {
            "msg": "Invalid value",
            "param": "name",
            "location": "body"
        },
        {
            "msg": "Invalid value",
            "param": "phone",
            "location": "body"
        },
        {
            "msg": "Invalid value",
            "param": "document",
            "location": "body"
        }
    ]
}
 */

/**
 * @api {post} /clients/balance Get balance
 * @apiName getBalance
 * @apiGroup Clients 
 *
 * @apiParam {string} phone client phone
 * @apiParam {string} document client document
 *
 * @apiSuccess {Boolean} success field indicating if the request was successful (true)
 * @apiSuccess {String} message Request message
 * @apiSuccess {Array} data List of stored tasks
 
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
    "success": true,
    "message": "Client found",
    "data": {
      "document": "123",
      "name": "Juan 2",
      "email": "a@a.com",
      "phone": "+5804143954723",
      "balance": 10,
      "_id": "604e7307cac360704ce81c49",
      "pays": [
        {
          "_id": "604e7337cac360704ce81c4a",
          "date": "2021-03-14T20:33:59.910Z",
          "value": 5,
          "token": "htznqb",
          "processed": true
        },
        {
          "_id": "604e838d42d9d28393fae547",
          "date": "2021-03-14T21:43:41.219Z",
          "value": 5,
          "token": "zav9sw",
          "processed": true
        }
      ],
      "created_at": "2021-03-14T20:33:11.747Z",
      "updated_at": "2021-03-14T20:33:11.747Z",
      "__v": 2,
      "id": "604e7307cac360704ce81c49"
    }
  }
 * @apiError {String} msg Error description.
 * @apiError {Boolean} success field indicating that there was a failure in the request (false).
 * @apiError {Array} errors error list.
 * @apiErrorExample {JSON} Internal Server Error
 * HTTP/1.1 500 Internal Server Error
 * {
    "success": false,
    "message": "Server error",
    "data": null,
    "errors": []
  }
* @apiErrorExample {JSON} Unprocessable Entity
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "success": false,
    "message": "Unprocessable Entity",
    "errors": [
      {
        "msg": "Invalid value",
        "param": "phone",
        "location": "body"
      },
      {
        "msg": "Invalid value",
        "param": "document",
        "location": "body"
      }
    ]
  }
* @apiErrorExample {JSON} Not Found
 * HTTP/1.1 404 Not Found
 * {
    "success": false,
    "message": "Client not found",
    "data": null
  }
 */

/**
 * @api {post} /clients/recharge Recharge
 * @apiName recherge
 * @apiGroup Clients 
 *
 * @apiParam {string} phone client phone
 * @apiParam {string} document client document
 * @apiParam {number} value value to recharge
 *
 * @apiSuccess {Boolean} success field indicating if the request was successful (true)
 * @apiSuccess {String} message Request message
 * @apiSuccess {Array} data List of stored tasks
 
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
    "success": true,
    "message": "Client update"
  }
 * @apiError {String} msg Error description.
 * @apiError {Boolean} success field indicating that there was a failure in the request (false).
 * @apiError {Array} errors error list.
 * @apiErrorExample {JSON} Internal Server Error
 * HTTP/1.1 500 Internal Server Error
 * {
    "success": false,
    "message": "Server error",
    "data": null,
    "errors": []
  }
* @apiErrorExample {JSON} Unprocessable Entity
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "success": false,
    "message": "Unprocessable Entity",
    "errors": [
      {
        "msg": "Invalid value",
        "param": "value",
        "location": "body"
      },
      {
        "msg": "valor de recarga es minimo 1",
        "param": "value",
        "location": "body"
      },
      {
        "msg": "Invalid value",
        "param": "phone",
        "location": "body"
      },
      {
        "msg": "Invalid value",
        "param": "document",
        "location": "body"
      }
    ]
  }
* @apiErrorExample {JSON} Not Found
 * HTTP/1.1 404 Not Found
 * {
    "success": false,
    "message": "Client not found"
  }
 */

 /**
 * @api {post} /clients/pay Pay
 * @apiName pay
 * @apiGroup Clients 
 *
 * @apiParam {string} phone client phone
 * @apiParam {string} document client document
 * @apiParam {number} value value to pay
 *
 * @apiSuccess {Boolean} success field indicating if the request was successful (true)
 * @apiSuccess {String} message Request message
 * @apiSuccess {Array} data List of stored tasks
 
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
    "success": true,
    "message": "Payment in process, an email has been sent with the session id that must be used in the purchase confirmation"
  }
 * @apiError {String} msg Error description.
 * @apiError {Boolean} success field indicating that there was a failure in the request (false).
 * @apiError {Array} errors error list.
 * @apiErrorExample {JSON} Internal Server Error
 * HTTP/1.1 500 Internal Server Error
 * {
    "success": false,
    "message": "Server error",
    "data": null,
    "errors": []
  }
* @apiErrorExample {JSON} Unprocessable Entity
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "success": false,
    "message": "Unprocessable Entity",
    "errors": [
      {
        "msg": "Invalid value",
        "param": "phone",
        "location": "body"
      },
      {
        "msg": "Invalid value",
        "param": "document",
        "location": "body"
      },
      {
        "msg": "Invalid value",
        "param": "value",
        "location": "body"
      },
      {
        "msg": "valor a pagar es minimo 1",
        "param": "value",
        "location": "body"
      }
    ]
  }
* @apiErrorExample {JSON} Not Found
 * HTTP/1.1 404 Not Found
 * {
    "success": false,
    "message": "Client not found"
  }
 */

 /**
 * @api {post} /clients/:id/pay/:pay Confirm pay
 * @apiName confirmPay
 * @apiGroup Clients 
 *
 * @apiParam {string} id client id
 * @apiParam {string} pay pay id (_id)
 * @apiParam {string} phone client phone
 * @apiParam {string} document client document
 * @apiParam {number} value value to pay
 *
 * @apiSuccess {Boolean} success field indicating if the request was successful (true)
 * @apiSuccess {String} message Request message
 * @apiSuccess {Array} data List of stored tasks
 
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
    "success": true,
    "message": "Payment processed successfully"
  }
* @apiSuccessExample {json} Payment was processed
 * HTTP/1.1 200 OK
 * {
    "success": true,
    "message": "Payment has already been processed",
    "data": {
      "_id": "604e838d42d9d28393fae547",
      "date": "2021-03-14T21:43:41.219Z",
      "value": 5,
      "token": "zav9sw",
      "processed": true
    }
  }
* @apiSuccessExample {json} Payment not processed
 * HTTP/1.1 200 OK
 * {
    "success": true,
    "message": "payment not processed, you do not have enough balance for this payment",
    "data": {
        "_id": "6050ce920938b56ac081682b",
      "date": "2021-03-16T15:28:18.047Z",
      "value": 45,
      "token": "q64b22",
      "processed": false
    }
  }
 * @apiError {String} msg Error description.
 * @apiError {Boolean} success field indicating that there was a failure in the request (false).
 * @apiError {Array} errors error list.
 * @apiErrorExample {JSON} Internal Server Error
 * HTTP/1.1 500 Internal Server Error
 * {
    "success": false,
    "message": "Server error",
    "data": null,
    "errors": []
  }
* @apiErrorExample {JSON} Unprocessable Entity
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "success": false,
    "message": "Unprocessable Entity",
    "errors": [
      {
        "msg": "Invalid value",
        "param": "code",
        "location": "body"
      },
      {
        "msg": "Invalid value",
        "param": "code",
        "location": "body"
      }
    ]
  }
* @apiErrorExample {JSON} Not Found
 * HTTP/1.1 404 Not Found
 * {
    "success": false,
    "message": "Client not found"
  }
 */