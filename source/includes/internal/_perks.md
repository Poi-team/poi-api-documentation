# Perks

<div class="public-endpoint"></div>
## Available Perks 

Lists all available perks on the Poi Network for the current user.

### HTTP Request

`GET /v1/perks`

### Query Parameters

<div class="params-table"></div>
name         | type      | required | default     | description |
-------------| --------- | -------- | ----------- | ----------- |
page         | `integer` |          | 1           | Page number |
per_page     | `integer` |          | 50          | Number of events per page |

>  JSON Response

```json
  {
    "data": [
      <Perk>,
      <Perk>,
      <Perk>
    ]
  }
```

<div class="public-endpoint"></div>
## My perks 

List all perks for the current user, categorized between `active` and `used`. Expired perks will be considered `used` but will have a special `expired` status.

### HTTP Request

`GET /v1/me/perks`

>  JSON Response

```json
  {
    "data": {
      "used": [
        {
          "id": 1,
          "status": "used",
          "name": "Too Good To Go - 30%",
          "picture": "https://aws.bucket.xyz/zwu.png",
          "amount": 10.0,
          "is_percentage": true,
          "price": 20.0,
          "use_code": "4XV732D",
          "expire_at": "2018-08-10T12:24:18.477Z",
          "application": {
            "id": 4,
            "name": "Too Good To Go"
          }
        }
      ],
      "active": [
        {
          "id": 2,
          "status": "active",
          "name": "Cityscoot - 15%",
          "picture": "https://aws.bucket.xyz/zwu.png",
          "amount": 10.0,
          "is_percentage": true,
          "price": 20.0,
          "use_code": "7ZV834C",
          "expire_at": "2018-08-10T12:24:18.477Z",
          "application": {
            "id": 5,
            "name": "Cityscoot"
          }
        }        
      ]
    }
  }
```

<div class="public-endpoint"></div>
## Select a Perk

Reserves the right for the current user to use a perk. Returns a [<Perk>](#perk) with its `use_code`.

> Request Body

```json
  {
    "id": 3
  }
```

### HTTP Request

`POST /v1/me/perks`

### Parameters

<div class="params-table"></div>
name                 | type      | required | default     | description |
---------------------| --------- | -------- | ----------- | ----------- |
id                   | `string`  | true     |         | The perk's id | 

>  JSON Response

```json
  {
    "data": {
      "id": 1,
      "status": "active",
      "name": "Too Good To Go - 30%",
      "picture": "https://aws.bucket.xyz/zwu.png",
      "amount": 10.0,
      "is_percentage": true,
      "price": 20.0,
      "use_code": "4XV732D",
      "expire_at": "2018-08-10T12:24:18.477Z",
      "application": {
        "id": 4,
        "name": "Too Good To Go"
      }
    }
  }
```

<div class="private-endpoint"></div>
## Mark Perk as used

(W.I.P)

### HTTP Request

`POST /v1/perks/:id`

### URL Arguments

<div class="params-table"></div>
name                 | type      | required | default     | description |
---------------------| --------- | -------- | ----------- | ----------- |
id                   | `string`  | true     |         | The perk's id | 