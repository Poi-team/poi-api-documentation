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

Get a list of all [categories](#categories) that have applications.

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
      "email": "george@gmail.com",
      "encrypted_password": "WJKZHcAzH9Ee8iavMUvYSKGkSXCcaTthalXTIrUKmjnV1gXgHoPg9/mXR4/fyP/pG87Z1EGPXyM1rUzRWYIlvBSHsLa+EQnFimNGr8NhFNs52AfzsHRM1/BQumTK6Q/ThsMIqbsKnnfYO8NQKbjPprT9NkzWqgpAzuH9XvXGyg0=",
  }
```

### HTTP Request

`POST /v1/me/apps/:id`

### URL Arguments

<div class="params-table"></div>
name          | type      | required | default     | description |
--------------| --------- | -------- | ----------- | ----------- |
id            | `integer`  | true         |             | The application id |

### Parameters

<div class="params-table"></div>
name          | type      | required | default     | description |
--------------| --------- | -------- | ----------- | ----------- |
email         | `string`  | true     |             | The user's email for this app |
encrypted_password      | `string`  | true     |             | The user's password encrypted with RSA and the given public key |


>  JSON Response

```json
  {
    "success": true,
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

`DELETE /v1/me/apps/:id`

### URL Arguments

<div class="params-table"></div>
name                 | type      | required | default     | description |
---------------------| --------- | -------- | ----------- | ----------- |
id                   | `integer` | true     |         | Application's id |

>  Response

```
  HTTP 204 No Content
```


<div class="public-endpoint"></div>
## List potential applications

### HTTP Request

`GET /v1/potential_applications`

### URL Arguments

<div class="params-table"></div>
name         | type      | required | default     | description |
-------------| --------- | -------- | ----------- | ----------- |
page         | `integer` |          | 1           | Page number |
per_page     | `integer` |          | 20          | Number of events per page |

>  Response

```json
  {
    "data": [
      {
        "id": 1,
        "name": "Yoyo",
        "description": "Lorem ipsum dolor es recyclette",
        "icon": "https://amz.co/yoyo.png", 
        "url": "https://yoyo.com",
        "status": "reviewing"
      },
      {
        "id": 2,
        "name": "Lime",
        "description": null,
        "icon": null, 
        "url": "https://lime.com",
        "status": "pending"
      }
    ]
  }
```


<div class="public-endpoint"></div>
## Suggest a potential application

Allows an user to suggest a new application to be integrated on the Poi Network. The user will also automaticaly vote for this application.

> Request Body

```json
  {
      "name": "Lime",
      "url": "https://www.lime.com"
  }
```

### HTTP Request

`POST /v1/potential_applications`

### Parameters

<div class="params-table"></div>
name          | type      | required | default     | description |
--------------| --------- | -------- | ----------- | ----------- |
name          | `string`  | true     |             | The potential app's name |
url           | `string`  | true     |             | The potential app's website URL |


>  JSON Response

```json
   {
      "id": 2,
      "name": "Lime",
      "description": null,
      "icon": null, 
      "url": "https://lime.com",
      "status": "pending"
    }
```


<div class="public-endpoint"></div>
## Vote for a potential application

Votes for a potential application in stead of the current user. An application can only be voted once.

### HTTP Request

`POST /v1/potential_applications/:id/vote`

### URL Arguments

<div class="params-table"></div>
name          | type      | required | default     | description |
--------------| --------- | -------- | ----------- | ----------- |
id            | `integer`  | true         |             | The potential application's id |

>  JSON Response

```json
  {
    "success": true,
    "data": {
      "voter_id": 1,
      "application_id": 1,
      "name": "Lime"
    }
  }
```

<div class="public-endpoint"></div>
## Remove vote on a potential application

Removes the previous vote by the current user on a potential application.

### HTTP Request

`DELETE /v1/potential_applications/:id/vote`

### URL Arguments

<div class="params-table"></div>
name          | type      | required | default     | description |
--------------| --------- | -------- | ----------- | ----------- |
id            | `integer`  | true         |             | The potential application's id |

>  Response

```
  HTTP 204 No Content
```
