define({ "api": [
  {
    "type": "post",
    "url": "/clients/:id/pay/:pay",
    "title": "Confirm pay",
    "name": "confirmPay",
    "group": "Clients",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>client id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pay",
            "description": "<p>pay id (_id)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone",
            "description": "<p>client phone</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "document",
            "description": "<p>client document</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "value",
            "description": "<p>value to pay</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>field indicating if the request was successful (true)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Request message</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>List of stored tasks</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Payment processed successfully\"\n  }",
          "type": "json"
        },
        {
          "title": "Payment was processed",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Payment has already been processed\",\n    \"data\": {\n      \"_id\": \"604e838d42d9d28393fae547\",\n      \"date\": \"2021-03-14T21:43:41.219Z\",\n      \"value\": 5,\n      \"token\": \"zav9sw\",\n      \"processed\": true\n    }\n  }",
          "type": "json"
        },
        {
          "title": "Payment not processed",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"payment not processed, you do not have enough balance for this payment\",\n    \"data\": {\n        \"_id\": \"6050ce920938b56ac081682b\",\n      \"date\": \"2021-03-16T15:28:18.047Z\",\n      \"value\": 45,\n      \"token\": \"q64b22\",\n      \"processed\": false\n    }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Error description.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>field indicating that there was a failure in the request (false).</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array",
            "optional": false,
            "field": "errors",
            "description": "<p>error list.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"success\": false,\n    \"message\": \"Server error\",\n    \"data\": null,\n    \"errors\": []\n  }",
          "type": "JSON"
        },
        {
          "title": "Unprocessable Entity",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"success\": false,\n    \"message\": \"Unprocessable Entity\",\n    \"errors\": [\n      {\n        \"msg\": \"Invalid value\",\n        \"param\": \"code\",\n        \"location\": \"body\"\n      },\n      {\n        \"msg\": \"Invalid value\",\n        \"param\": \"code\",\n        \"location\": \"body\"\n      }\n    ]\n  }",
          "type": "JSON"
        },
        {
          "title": "Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"success\": false,\n    \"message\": \"Client not found\"\n  }",
          "type": "JSON"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/docs/clients.js",
    "groupTitle": "Clients"
  },
  {
    "type": "post",
    "url": "/clients/balance",
    "title": "Get balance",
    "name": "getBalance",
    "group": "Clients",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone",
            "description": "<p>client phone</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "document",
            "description": "<p>client document</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>field indicating if the request was successful (true)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Request message</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>List of stored tasks</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Client found\",\n    \"data\": {\n      \"document\": \"123\",\n      \"name\": \"Juan 2\",\n      \"email\": \"a@a.com\",\n      \"phone\": \"+5804143954723\",\n      \"balance\": 10,\n      \"_id\": \"604e7307cac360704ce81c49\",\n      \"pays\": [\n        {\n          \"_id\": \"604e7337cac360704ce81c4a\",\n          \"date\": \"2021-03-14T20:33:59.910Z\",\n          \"value\": 5,\n          \"token\": \"htznqb\",\n          \"processed\": true\n        },\n        {\n          \"_id\": \"604e838d42d9d28393fae547\",\n          \"date\": \"2021-03-14T21:43:41.219Z\",\n          \"value\": 5,\n          \"token\": \"zav9sw\",\n          \"processed\": true\n        }\n      ],\n      \"created_at\": \"2021-03-14T20:33:11.747Z\",\n      \"updated_at\": \"2021-03-14T20:33:11.747Z\",\n      \"__v\": 2,\n      \"id\": \"604e7307cac360704ce81c49\"\n    }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Error description.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>field indicating that there was a failure in the request (false).</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array",
            "optional": false,
            "field": "errors",
            "description": "<p>error list.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"success\": false,\n    \"message\": \"Server error\",\n    \"data\": null,\n    \"errors\": []\n  }",
          "type": "JSON"
        },
        {
          "title": "Unprocessable Entity",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"success\": false,\n    \"message\": \"Unprocessable Entity\",\n    \"errors\": [\n      {\n        \"msg\": \"Invalid value\",\n        \"param\": \"phone\",\n        \"location\": \"body\"\n      },\n      {\n        \"msg\": \"Invalid value\",\n        \"param\": \"document\",\n        \"location\": \"body\"\n      }\n    ]\n  }",
          "type": "JSON"
        },
        {
          "title": "Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"success\": false,\n    \"message\": \"Client not found\",\n    \"data\": null\n  }",
          "type": "JSON"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/docs/clients.js",
    "groupTitle": "Clients"
  },
  {
    "type": "get",
    "url": "/clients",
    "title": "Client list",
    "name": "getClient",
    "group": "Clients",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>field indicating if the request was successful (true)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Request message</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>List of stored tasks</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Clients list found\",\n    \"data\": [\n      {\n        \"document\": \"123\",\n        \"name\": \"Juan 2\",\n        \"email\": \"a@a.com\",\n        \"phone\": \"+5804143954723\",\n        \"balance\": 10,\n        \"_id\": \"604e7307cac360704ce81c49\",\n        \"pays\": [\n          {\n            \"_id\": \"604e7337cac360704ce81c4a\",\n            \"date\": \"2021-03-14T20:33:59.910Z\",\n            \"value\": 5,\n            \"token\": \"htznqb\",\n            \"processed\": true\n          },\n          {\n            \"_id\": \"604e838d42d9d28393fae547\",\n            \"date\": \"2021-03-14T21:43:41.219Z\",\n            \"value\": 5,\n            \"token\": \"zav9sw\",\n            \"processed\": true\n          }\n        ],\n        \"created_at\": \"2021-03-14T20:33:11.747Z\",\n        \"updated_at\": \"2021-03-14T20:33:11.747Z\",\n        \"__v\": 2,\n        \"id\": \"604e7307cac360704ce81c49\"\n      },\n      {\n        \"document\": \"1234\",\n        \"name\": \"Koyag\",\n        \"email\": \"gajomensal@gmail.com\",\n        \"phone\": \"1234\",\n        \"balance\": 45,\n        \"_id\": \"6050bf58f5c6f146a4c6ffa1\",\n        \"pays\": [\n          {\n            \"_id\": \"6050ce920938b56ac081682b\",\n            \"date\": \"2021-03-16T15:28:18.047Z\",\n            \"value\": 5,\n            \"token\": \"q64b22\",\n            \"processed\": false\n          },\n          {\n            \"_id\": \"6050f0b61c15578322c99204\",\n            \"date\": \"2021-03-16T17:53:58.325Z\",\n            \"value\": 5,\n            \"token\": \"yqdwqe\",\n            \"processed\": false\n          },\n          {\n            \"_id\": \"6050f0f99ae38083b3b6ff0e\",\n            \"date\": \"2021-03-16T17:55:05.520Z\",\n            \"value\": 5,\n            \"token\": \"18r8pu\",\n            \"processed\": true\n          }\n        ],\n        \"created_at\": \"2021-03-16T14:23:20.963Z\",\n        \"updated_at\": \"2021-03-16T14:23:20.963Z\",\n        \"__v\": 3,\n        \"id\": \"6050bf58f5c6f146a4c6ffa1\"\n      }\n  ]\n}",
          "type": "json"
        },
        {
          "title": "Without records",
          "content": "HTTP/1.1 200 Success without clients\n{\n      \"success\": true,\n      \"message\": \"Clients list found\",\n      \"data\": []\n    }",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Error description.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>field indicating that there was a failure in the request (false).</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array",
            "optional": false,
            "field": "errors",
            "description": "<p>error list.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"success\": false,\n    \"message\": \"Server error\",\n    \"data\": null,\n    \"errors\": []\n  }",
          "type": "JSON"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/docs/clients.js",
    "groupTitle": "Clients"
  },
  {
    "type": "post",
    "url": "/clients/pay",
    "title": "Pay",
    "name": "pay",
    "group": "Clients",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone",
            "description": "<p>client phone</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "document",
            "description": "<p>client document</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "value",
            "description": "<p>value to pay</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>field indicating if the request was successful (true)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Request message</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>List of stored tasks</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Payment in process, an email has been sent with the session id that must be used in the purchase confirmation\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Error description.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>field indicating that there was a failure in the request (false).</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array",
            "optional": false,
            "field": "errors",
            "description": "<p>error list.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"success\": false,\n    \"message\": \"Server error\",\n    \"data\": null,\n    \"errors\": []\n  }",
          "type": "JSON"
        },
        {
          "title": "Unprocessable Entity",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"success\": false,\n    \"message\": \"Unprocessable Entity\",\n    \"errors\": [\n      {\n        \"msg\": \"Invalid value\",\n        \"param\": \"phone\",\n        \"location\": \"body\"\n      },\n      {\n        \"msg\": \"Invalid value\",\n        \"param\": \"document\",\n        \"location\": \"body\"\n      },\n      {\n        \"msg\": \"Invalid value\",\n        \"param\": \"value\",\n        \"location\": \"body\"\n      },\n      {\n        \"msg\": \"valor a pagar es minimo 1\",\n        \"param\": \"value\",\n        \"location\": \"body\"\n      }\n    ]\n  }",
          "type": "JSON"
        },
        {
          "title": "Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"success\": false,\n    \"message\": \"Client not found\"\n  }",
          "type": "JSON"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/docs/clients.js",
    "groupTitle": "Clients"
  },
  {
    "type": "post",
    "url": "/clients/recharge",
    "title": "Recharge",
    "name": "recherge",
    "group": "Clients",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone",
            "description": "<p>client phone</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "document",
            "description": "<p>client document</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "value",
            "description": "<p>value to recharge</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>field indicating if the request was successful (true)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Request message</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>List of stored tasks</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Client update\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Error description.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>field indicating that there was a failure in the request (false).</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array",
            "optional": false,
            "field": "errors",
            "description": "<p>error list.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"success\": false,\n    \"message\": \"Server error\",\n    \"data\": null,\n    \"errors\": []\n  }",
          "type": "JSON"
        },
        {
          "title": "Unprocessable Entity",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"success\": false,\n    \"message\": \"Unprocessable Entity\",\n    \"errors\": [\n      {\n        \"msg\": \"Invalid value\",\n        \"param\": \"value\",\n        \"location\": \"body\"\n      },\n      {\n        \"msg\": \"valor de recarga es minimo 1\",\n        \"param\": \"value\",\n        \"location\": \"body\"\n      },\n      {\n        \"msg\": \"Invalid value\",\n        \"param\": \"phone\",\n        \"location\": \"body\"\n      },\n      {\n        \"msg\": \"Invalid value\",\n        \"param\": \"document\",\n        \"location\": \"body\"\n      }\n    ]\n  }",
          "type": "JSON"
        },
        {
          "title": "Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"success\": false,\n    \"message\": \"Client not found\"\n  }",
          "type": "JSON"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/docs/clients.js",
    "groupTitle": "Clients"
  },
  {
    "type": "post",
    "url": "/clients",
    "title": "Register Client",
    "name": "registerClient",
    "group": "Clients",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>client name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>client email</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone",
            "description": "<p>client phone</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "document",
            "description": "<p>client document</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>field indicating if the request was successful (true)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Request message</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>List of stored tasks</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"The new client has been successfully registered\",\n    \"data\": {\n        \"document\": \"1235\",\n        \"name\": \"Juan\",\n        \"email\": \"a@a.com\",\n        \"phone\": \"+5804143954723\",\n        \"balance\": 0,\n        \"_id\": \"605104bbf838229459d7226a\",\n        \"pays\": [],\n        \"created_at\": \"2021-03-16T19:19:23.878Z\",\n        \"updated_at\": \"2021-03-16T19:19:23.878Z\",\n        \"id\": \"605104bbf838229459d7226a\"\n    }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Error description.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>field indicating that there was a failure in the request (false).</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array",
            "optional": false,
            "field": "errors",
            "description": "<p>error list.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"success\": false,\n    \"message\": \"Server error\",\n    \"data\": null,\n    \"errors\": []\n  }",
          "type": "JSON"
        },
        {
          "title": "Unprocessable Entity",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"success\": false,\n    \"message\": \"Unprocessable Entity\",\n    \"errors\": [\n        {\n            \"msg\": \"Invalid value\",\n            \"param\": \"email\",\n            \"location\": \"body\"\n        },\n        {\n            \"msg\": \"Invalid value\",\n            \"param\": \"name\",\n            \"location\": \"body\"\n        },\n        {\n            \"msg\": \"Invalid value\",\n            \"param\": \"name\",\n            \"location\": \"body\"\n        },\n        {\n            \"msg\": \"Invalid value\",\n            \"param\": \"phone\",\n            \"location\": \"body\"\n        },\n        {\n            \"msg\": \"Invalid value\",\n            \"param\": \"document\",\n            \"location\": \"body\"\n        }\n    ]\n}",
          "type": "JSON"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/docs/clients.js",
    "groupTitle": "Clients"
  }
] });
