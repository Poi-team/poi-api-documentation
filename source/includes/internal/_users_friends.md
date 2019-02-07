# Users & Friends

<div class="public-endpoint"></div>
## Users count

Gets the number of users registered on the Poi Network.

### HTTP Request

`GET /v1/users/count`

>  JSON Response

```json
  {
    "data": 5
  }
```

<div class="public-endpoint"></div>
## My Friends

List all the user's friends and invited persons.

### HTTP Request

`GET /v1/me/friends`

### Query Parameters

<div class="params-table"></div>
name         | type      | required | default     | description |
-------------| --------- | -------- | ----------- | ----------- |
page         | `integer` | true     | 1           | Page number |
per_page     | `integer` | true     | 50          | Number of events per page |

>  JSON Response

```json
  {
    "data": {
      "invited": [
        {
          "name": "Nathan",
          "phone_number": "+330809832",
          "status": "invited"
        }
      ],
      "friends": [
        {
          "id": 1,
          "name": "George",
          "phone_number": "+33732231321",
          "impact_points": 500,
          "level": 15,
        },
        {
          "id": 13,
          "name": "Julien",
          "phone_number": "+33738231370",
          "impact_points": 300,
          "level": 12,
        }
      ]  
    }
  }
```

<div class="public-endpoint"></div>
## Invite contact

Invites a contact. This is primarly used to keep track of already invited contacts.

> Request Body

```json
  {
    "name": "George Abitbol",
    "phone_number": "0732030203"
  }
```

### HTTP Request

`POST /v1/me/invites`

### Parameters

<div class="params-table"></div>
name                 | type      | required | default     | description |
---------------------| --------- | -------- | ----------- | ----------- |
name         | `string`  | true  |         | Contact's name |
phone_number | `string`  | true  |         | Contact's phone number |

>  JSON Response

```json
  {
    "success": true,
    "data": {
      "name": "George Abitbol",
      "phone_number": "0732030203",
      "status": "pending"
    }
  }
```

<div class="public-endpoint"></div>
## Add friend 

Adds an user to the current user's friend list.

### HTTP Request

`POST /v1/me/friends/:id`

### URL Parameters

<div class="params-table"></div>
name                 | type      | required | default     | description |
---------------------| --------- | -------- | ----------- | ----------- |
id                   | `integer` | true     |         | Friend's ID |

>  JSON Response

```json
  {
    "success": true,
    "data": {
      "id": 2,
      "name": "Julien",
      "phone_number": "+33738231370",
      "impact_points": 300,
      "level": 12,
    }
  }
```

<div class="public-endpoint"></div>
## Remove friend 

Removes an user from the current user's friend list.

### HTTP Request

`DELETE /v1/me/friends/:id`

### URL Parameters

<div class="params-table"></div>
name                 | type      | required | default     | description |
---------------------| --------- | -------- | ----------- | ----------- |
id                   | `integer` | true     |         | Friend's ID |

>  Response

```
  HTTP 204 No Content
```

