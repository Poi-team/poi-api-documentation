# Current user

## Me

Gets the current user's information. See <a href="#user"><User></a> for more details.

### HTTP Request

`GET /v1/me`

>  JSON Response

```json
  {
    "data": <User>
  }
```

## My Events

List of all actions the user has taken on the Poi Network.

### HTTP Request

`GET /v1/me/events`

### Query Parameters

<div class="params-table"></div>
name         | type      | required | default     | description |
-------------| --------- | -------- | ----------- | ----------- |
period       | `string`  |          | global      | A time period: `week`, `month` or `global` |
page         | `integer` |          | 1           | Page number |
per_page     | `integer` |          | 100         | Number of events per page |

>  JSON Response

```json
  {
    "data": [
      <Event>, 
      <Event>,
      <Event>
    ]
  }
```

## My Connected Apps

List of all apps the user has connected.

### HTTP Request

`GET /v1/me/apps`

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
        "name": "Too Good To Go",
        "icon": "https://aws.bucket.xyz/zwu.png",
        "email": "george@gmail.com",
        "status": "connected"
      },
      {
        "name": "Cityscoot",
        "icon": "https://aws.bucket.xyz/cts.png",
        "email": "abitbol.g@gmail.com",
        "status": "disconnected"
      }
    ]
  }
```

## Connect an app

You need to send encrypted data yada yada

> Request

```json
  {
      "email": "george@gmail.com",
      "password": "password",
      "password_confirmation": "password",
      "full_name": "George Abitbol"
  }
```

### HTTP Request

`POST /v1/me/apps`

### Parameters

<div class="params-table"></div>
name          | type      | required | default     | description |
--------------| --------- | -------- | ----------- | ----------- |
email         | `string`  | true     |             | The user's email |
password      | `string`  | true     |             | The user's password |
first_name    | `string`  |          |             | The user's first name |
last_name     | `string`  |          |             | The user's last name |
birthday      | `string`  |          |             | The user's date of birth|
phone_number  | `string`  |          |             | The user's phone number |

>  JSON Response

```json
  {
    "data": <User>
  }
```

## My Available Perks

List of all the perks available to the current user.

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