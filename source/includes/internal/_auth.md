# Authentication

All requests will need to be signed with your **API Private Key**.<br />
Authentication to the API is performed via HTTP Basic Auth.Provide your API Private Key as the basic auth username value. You do not need to provide a password.

| header name            | description              |                     
|:----------------|--------------------------|
| `Authorization: Basic` | Your Application Private Key |


Furthermore, if the request needs to be user authenticated (most of the time) you will need to pass the following headers:

| header name            | description           |
|:----------------|-----------------------|
| `access-token`  | Authenticates the user. |
| `expiry`        | The date at which the current access-token will expire. |
| `uid`           | A unique value that is used to identify the user. This is necessary because searching the DB for users by their access token will make the API susceptible to timing attacks.|

The values for those headers can be obtained through a **fetch credentials**, **sign in** or **sign up** request. You need to store them in your application's local database to be used in subsequent requests and refresh the token when it expires.

```shell
curl "/api/v1/..."
  -H "Authorization: Basic sb_fm_e5k0al9TBvA3Vgo4fvcgd6mDgWah0sST"
```
```shell
  curl "/api/v1/..."
  -H "Authorization: Basic sb_fm_e5k0al9TBvA3Vgo4fvcgd6mDgWah0sST" \
  -H "access-token:  v7c0al9bBvA4Vgo4rvcgd6mDgWah3suV" \
  -H "token-type":   "Bearer",
  -H "expiry: 1537026922" \
  -H "uid: george@gmail.com"
```

## Sign Up

Allows you to create a new user on the Poi Network.<br />
Upon a successful sign up, the necessary authentication information (`access-token`, `uid`, token `expiry`...) will be returned in the headers of the response.

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

`POST /api/v1/user_auth`

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

## Sign In

Signs in a user and retrieve a it's authentication token to be used in future requests.<br />
Upon a successful sign in, the necessary authentication information (`access-token`, `uid`, token `expiry`...) will be returned in the headers of the response.

> Request

```json
  {
      "email": "george@gmail.com",
      "password": "password",
  }
```

### HTTP Request

`POST /api/v1/user_auth/sign_in`

### Parameters

<div class="params-table"></div>
name          | type      | required | default     | description |
--------------| --------- | -------- | ----------- | ----------- |
email         | `string`  | true     |             | The user's email |
password      | `string`  | true     |             | The user's password |
password_confirmation | `string`  |      |         | The user's password confirmation |

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

## Account Update

Updates a user's account.<br />

> Request

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

`PUT /api/v1/user_auth`

### Parameters

<div class="params-table"></div>
name          | type      | required | default     | description |
--------------| --------- | -------- | ----------- | ----------- |
email         | `string`  |       |                | The user's email |
password      | `string`  |       |                | The user's new password |
password_confirmation | `string`  |      |         | The user's new password confirmation |
current_password      | `string`  | true |         | The user's current password |
first_name    | `string`  |          |             | The user's first name |
last_name     | `string`  |          |             | The user's last name |
birthday      | `string`  |          |             | The user's date of birth|
phone_number  | `string`  |          |             | The user's phone number |


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
