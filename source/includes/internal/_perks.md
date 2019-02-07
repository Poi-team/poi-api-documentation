# Perks


<div class="public-endpoint"></div>
## Perks 


<div class="public-endpoint"></div>
## My available perks 

### HTTP Request

`GET /v1/me/perks`

### Query Parameters

<div class="params-table"></div>
name         | type      | required | default     | description |
-------------| --------- | -------- | ----------- | ----------- |
page         | `integer` |          | 1           | Page number |
per_page     | `integer` |          | 100         | Number of events per page |

>  JSON Response

```json
  {
    "data": [
      {
        "name": "Too Good To Go - 30%",
        "picture": "https://aws.bucket.xyz/zwu.png",
        "amount": 10,
        "application": {
          "id": 5,
          "name": "Too Good To Go"
        }
      },
      {
        "name": "Cityscoot - 15%",
        "picture": "https://aws.bucket.xyz/zwu.png",
        "amount": 10,
        "application": {
          "id": 5,
          "name": "Cityscoot"
        }
      }
    ]
  }
```
