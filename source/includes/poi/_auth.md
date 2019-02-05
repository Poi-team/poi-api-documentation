# Authentication

To integrate with the Poi Network, your requests will need to be signed with your Application **API Key** (get one here).
This is done by passing the following headers:

| name            | description              |                     
|:----------------|--------------------------|
| `app-token`     | Your Application API Key |


Furthermore, if the request needs to be user authenticated (most of the time) you will need to pass the following headers:

| name            | description           |
|:----------------|-----------------------|
| `access-token`  | Authenticates the user. |
| `expiry`        | The date at which the current access-token will expire. |
| `uid`           | A unique value that is used to identify the user. This is necessary because searching the DB for users by their access token will make the API susceptible to timing attacks.|

The values for those headers can be obtained through a **Fetch credentials**, **sign in** or **sign up** request. You need to store them in your application's local database to be used in subsequent requests and refresh the token when it expires.

```shell
curl "/v1/..."
  -H "app-token: e5k0al9TBvA3Vgo4fvcgd6mDgWah0sST"
```

## Sign Up

> Request

```shell
curl "/v1/auth"
  -H "app-token: e5k0al9TBvA3Vgo4fvcgd6mDgWah0sST"
```

> JSON response

```json
[
  {
    "id": 1,
    "name": "Fluffums",
    "breed": "calico",
    "fluffiness": 6,
    "cuteness": 7
  },
  {
    "id": 2,
    "name": "Max",
    "breed": "unknown",
    "fluffiness": 5,
    "cuteness": 10
  }
]
```

This endpoint retrieves all kittens.

### HTTP Request

`GET http://example.com/api/kittens`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
include_cats | false | If set to true, the result will also include cats.
available | true | If set to false, the result will include kittens that have already been adopted.

<aside class="success">
Remember — a happy kitten is an authenticated kitten!
</aside>