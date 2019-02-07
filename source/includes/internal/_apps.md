# Applications

<div class="public-endpoint"></div>
## List applications

Get a list of all applications registered on the Poi Network.

### HTTP Request

`GET /v1/applications`

### Query Parameters

<div class="params-table"></div>
name         | type      | required | default     | description |
-------------| --------- | -------- | ----------- | ----------- |
page         | `integer` |          | 1           | Page number |
per_page     | `integer` |          | 10          | Number of events per page |
category     | `category` |         |             | A filter by category (`mobility`, `health`, ...)

>  JSON Response

```json
  {
    "data": [
      <Application>,
      <Application>
      <Application>
    ]
  }
```

<div class="public-endpoint"></div>
## Fetch application

Get an application's information.

```shell
  curl "/v1/applications/1"
```

### HTTP Request

`GET /v1/applications/:id`

### URL Arguments

<div class="params-table"></div>
name         | type      | required | default     | description |
-------------| --------- | -------- | ----------- | ----------- |
id           | `integer` | true     | 1           | The application's id |

>  JSON Response

```json
  {
    "data": <Application>
  }
```

<div class="public-endpoint"></div>
## List categories

Get a list of all categories that have applications.

### HTTP Request

`GET /v1/applications/categories`

>  JSON Response

```json
  {
    "data": [
      "mobility",
      "consumption",
      "health"
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

> Request Body

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
## Disconnect an app

### HTTP Request

`PUT /v1/me/apps/:id`
