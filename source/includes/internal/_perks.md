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

List all perks for the current user, categorized between `active` and `used`.

### HTTP Request

`GET /v1/me/perks`

### Query Parameters

<div class="params-table"></div>
name         | type      | required | default     | description |
-------------| --------- | -------- | ----------- | ----------- |
page         | `integer` |          | 1           | Page number |
per_page     | `integer` |          | 50          | Number of events per page |

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
          "amount": 10,
          "use_code": "4XV732D",
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
          "amount": 10,
          "use_code": "7ZV834C",
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

### HTTP Request

`PUT /v1/me/perks/:id`

### URL Arguments

<div class="params-table"></div>
name                 | type      | required | default     | description |
---------------------| --------- | -------- | ----------- | ----------- |
id                   | `string`  | true     |         | The perk's id | 

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