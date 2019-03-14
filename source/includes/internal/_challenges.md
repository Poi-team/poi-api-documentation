# Challenges

<div class="public-endpoint"></div>
## My challenges

List of all the current user's sent or received challenges.

### HTTP Request

`GET /v1/me/challenges`

### Query Parameters

<div class="params-table"></div>
name         | type      | required | default     | description |
-------------| --------- | -------- | ----------- | ----------- |
page         | `integer` |          | 1           | Page number |
per_page     | `integer` |          | 10          | Number of events per page |

>  JSON Response

```json
  {
    "data": {
      "sent": [
        <Challenge>,
        <Challenge>,
        <Challenge>
      ],
      "received": [
        <Challenge>
      ]
    }
  }
```

<div class="public-endpoint"></div>
## Challenge a friend

Challenge a friend to an epic impact battle! 

> Request Body

```json
  {
    "phone_number": "0732030203",
    "category": "mobility",
    "timeframe": "1 week",
    "goal": "50"

  }
```

### HTTP Request

`POST /v1/me/challenges`

### Parameters

<div class="params-table"></div>
name                 | type      | required | default     | description |
---------------------| --------- | -------- | ----------- | ----------- |
phone_number         | `string`  | true     |         | The challenged user phone number |
category             | `string`  | true     |         | The challenge's [category](#categories) |
timeframe            | `string`  | true     |         | The time frame for the challenge, `1 week`, `2 weeks` or `1 month` |
goal                 | `integer` | true     |         | Number of points to reach to complete the challenge. |
 

>  JSON Response

```json
  {
    "success": true,
    "data": <Challenge>
  }
```

<div class="public-endpoint"></div>
## Accept a friend's challenge

Accept a challenge sent to the current user.

### HTTP Request

`PUT /v1/me/challenges/:id/accept`

### URL Parameters

<div class="params-table"></div>
name                 | type      | required | default     | description |
---------------------| --------- | -------- | ----------- | ----------- |
id                   | `integer` | true     |             | The challenge's id |
 

>  JSON Response

```json
  {
    "success": true,
    "data": <Challenge>
  }
```

<div class="public-endpoint"></div>
## Deny a friend's challenge

Deny a challenge sent to the current user.

### HTTP Request

`PUT /v1/me/challenges/:id/deny`

### URL Parameters

<div class="params-table"></div>
name                 | type      | required | default     | description |
---------------------| --------- | -------- | ----------- | ----------- |
id                   | `integer` | true     |             | The challenge's id |
 

>  JSON Response

```json
  {
    "success": true,
    "data": <Challenge>
  }
```