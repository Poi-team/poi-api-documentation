# User Authentication

Additionnaly to [Service Authentication](#service-authentication), when the request needs to be **user authenticated** (which is the case most of the time) you will need to add another layer of authentication by passing the following headers:

| header name            | description           |
|:----------------|-----------------------|
| `access-token`  | Authenticates the user, acts as a password. |
| `client`  |  Identifies the device. |
| `token-type`  | The token type, should always be `Bearer`. |
| `uid`           | A unique value that is used to identify the user. This is necessary because searching the DB for users by their access token will make the API susceptible to timing attacks.|

The values as well as the `expiry` date for those headers can be obtained through a [Sign in](#sign-in), [Sign up](#sign-up) or [Fetch credentials](#fetch-credentials) request.

Once retrieved, you need to store the `access-token`, `client`, `expiry` date and `uid` in your application's local store to be used in subsequent requests without signing in again.<br/> When the token expires, it is also your responsability to [keep it fresh](#refresh-token) (WIP).

```shell
  curl "/v1/..."
  -H "Authorization: Basic RWzhZGRpbjpbvHNpdTZornFRcmd=" \
  -H "access-token:  v7c0al9bBvA4Vgo4rvcgd6mDgWah3suV" \
  -H "token-type":   "Bearer",
  -H "expiry: 1537026922" \
  -H "uid: george@gmail.com"
```

<aside class="info">
Apart from <i>Sign in</i>, <i>Sign up</i> and <i>Fetch credentials</i>, <b>all requests are user authentifed</b> unless specified otherwise.
</aside>

<div class="public-endpoint"></div>
## Sign Up

Allows you to create a new user on the Poi Network.<br />

Upon a successful sign up, the necessary authentication information (`access-token`, `uid`, token `expiry`...) will be returned in the headers of the response.

> Request Body

```json
  {
      "email": "george@gmail.com",
      "full_name": "George Abitbol",
      "phone_number": "George Abitbol",
      "referrer_code": "6XD8C",
      "password": "password",
      "password_confirmation": "password"
  }
```

### HTTP Request

`POST /v1/auth`

### Parameters

<div class="params-table"></div>
name          | type      | required | default     | description |
--------------| --------- | -------- | ----------- | ----------- |
full_name     | `string`  |          |             | The user's name |
email         | `string`  | true     |             | The user's email |
password      | `string`  | true     |             | The user's password |
password_confirmation | `string`  | true     |             | The user's password confirmation |
phone_number  | `string`  |          |             | The user's phone number |
referrer_code | `string`  |          |             | An other user's referral code |


>  JSON Response

> Headers

```json
  access-token: "e5k0al9TBvA3Vgo4fvcgd6mDgWah0sST",
  token-type:   "Bearer",
  client:       "HC0ql3OzFe",
  uid:          "xxx@poi.app",
  expiry:       "1537026922"
```

> Body

```json
  {
      "status": "success",
      "data": <User>
  }
```

<div class="public-endpoint"></div>
## Sign In

Signs in a user and retrieve a it's authentication token to be used in future requests.<br />

Upon a successful sign in, the necessary authentication information (`access-token`, `uid`, token `expiry`...) will be returned in the headers of the response.

> Request Body

```json
  {
      "email": "george@gmail.com",
      "password": "password",
      "password_confirmation": "password"
  }
```

### HTTP Request

`POST /v1/auth/sign_in`

### Parameters

<div class="params-table"></div>
name          | type      | required | default     | description |
--------------| --------- | -------- | ----------- | ----------- |
email         | `string`  | true     |             | The user's email |
password      | `string`  | true     |             | The user's password |
password_confirmation | `string`  | true  |         | The user's password confirmation |

>  JSON Response

> Headers

```json
  access-token: "e5k0al9TBvA3Vgo4fvcgd6mDgWah0sST",
  token-type:   "Bearer",
  client:       "HC0ql3OzFe",
  uid:          "xxx@poi.app",
  expiry:       "1537026922"
```

> Body

```json
  {
      "status": "success",
      "data": <User>
  }
```

<div class="public-endpoint"></div>
## Account Update

Updates a user's account.<br />

> Request Body

```json
  {
    "full_name": "George Doran",
    "email": "george@poi.app",
    "birthday": "06/11/2000",
    "phone_number": "0633234232",
    "password": "new_password",
    "password_confirmation": "new_password",
    "current_password": "password"
  }
```

### HTTP Request

`PUT /v1/auth`

### Parameters

<div class="params-table"></div>
name          | type      | required | default     | description |
--------------| --------- | -------- | ----------- | ----------- |
full_name     | `string`  |          |             | The user's name |
email         | `string`  |          |             | The user's email |
phone_number  | `string`  |          |             | The user's phone number |
password      | `string`  |       |                | The user's new password |
password_confirmation | `string`  |      |         | The user's new password confirmation |
current_password      | `string`  | true |         | The user's current password |


>  JSON Response

> Headers

```json
  access-token: "e5k0al9TBvA3Vgo4fvcgd6mDgWah0sST",
  token-type:   "Bearer",
  client:       "HC0ql3OzFe",
  uid:          "xxx@poi.app",
  expiry:       "1537026922"
```

> Body

```json
  {
      "status": "success",
      "data": <User>
  }
```

<div class="private-endpoint"></div>
## Fetch credentials

[W.I.P]