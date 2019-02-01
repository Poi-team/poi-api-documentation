# Authenticated User

<div class="public-endpoint"></div>
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

<div class="public-endpoint"></div>
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

<div class="public-endpoint"></div>
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

<div class="public-endpoint"></div>
## Connect an app

Allows a user to connect their account to a new application. To do so, you will need to send the user's credentials encrypted using **RSA**.
Here are some libraries that you can use: 

- [uRSA](https://github.com/JoshKaufman/ursa) [JS]
- [JSencrypt](https://github.com/travist/jsencrypt) [JS]
- [OpenSSL::PKey::RSA](https://ruby-doc.org/stdlib-2.5.1/libdoc/openssl/rdoc/OpenSSL/PKey/RSA.html) [Ruby]

The public key used for encryption is the following

<div class="rsa-pkey-container">
  <pre class="rsa-pkey">-----BEGIN PUBLIC KEY-----
  MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDlOJu6TyygqxfWT7eLtGDwajtN
  FOb9I5XRb6khyfD1Yt3YiCgQWMNW649887VGJiGr/L5i2osbl8C9+WJTeucF+S76
  xFxdU6jE0NQ+Z+zEdhUTooNRaY5nZiu5PgDB0ED/ZKBUSLKL7eibMxZtMlUDHjm4
  gwQco1KRMDSmXSMkDwIDAQAB
  -----END PUBLIC KEY-----</pre>
</div>

> Request

```json
  {
      "application_id": 3,
      "email": "george@gmail.com",
      "encrypted_password": "WJKZHcAzH9Ee8iavMUvYSKGkSXCcaTthalXTIrUKmjnV1gXgHoPg9/mXR4/fyP/pG87Z1EGPXyM1rUzRWYIlvBSHsLa+EQnFimNGr8NhFNs52AfzsHRM1/BQumTK6Q/ThsMIqbsKnnfYO8NQKbjPprT9NkzWqgpAzuH9XvXGyg0=",
  }
```

### HTTP Request

`POST /v1/me/apps`

### Parameters

<div class="params-table"></div>
name          | type      | required | default     | description |
--------------| --------- | -------- | ----------- | ----------- |
application_id    | `integer`  | true         |             | The application id |
email         | `string`  | true     |             | The user's email for this app |
encrypted_password      | `string`  | true     |             | The user's password encrypted with RSA and the given public key |


>  JSON Response

```json
  {
    "data": {
      "application_id": 3,
      "name": "Cityscoot",
      "connected": true
    }
  }
```

<div class="public-endpoint"></div>
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