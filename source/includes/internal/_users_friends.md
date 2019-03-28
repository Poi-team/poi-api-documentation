# Users & Friends

<div class="public-endpoint"><span class="unauth-endpoint"></span></div>
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

>  JSON Response

```json
  {
    "data": {
      "invited": [
        {
          "inviter_id": 3,
          "invitee_id": 12,
          "name": "Nathan",
          "phone_number": "+330809832",
          "status": "accepted"
        },
        {
          "inviter_id": 3,
          "invitee_id": null,
          "name": "Lisa",
          "phone_number": "+336809872",
          "status": "pending"
        }
      ],
      "friends": [
        {
          "id": 1,
          "rank": 3,
          "name": "George",
          "phone_number": "+33732231321",
          "impact_points": 500,
          "level": 15,
          "status_uid": "master_poi"
        },
        {
          "id": 13,
          "rank": "50K",
          "name": "Julien",
          "phone_number": "+33738231370",
          "impact_points": 300,
          "level": 12,
          "status_uid": "master_poi"
        }
      ],
      "suggested_friends": [
        {
          "id": 5,
          "name": "George",
          "phone_number": "+33732231321",
          "impact_points": 500,
          "level": 15,
          "status_uid": "master_poi"
        },
        {
          "id": 11,
          "name": "Julien",
          "phone_number": "+33738231370",
          "impact_points": 300,
          "level": 12,
          "status_uid": "master_poi"
        }
      ]    
    }
  }
```

<div class="public-endpoint"></div>
## Register contacts

This endpoint is used to sent the user's device contact list so it can be matched against our database, allowing us to suggest friends to the user.

Returns a list of friends suggestions.


> Request Body

```json
  [
    {
      "name": "George Abitbol",
      "phone_number": "0732030203"
    },
    {
      "name": "Martha Abitbol",
      "phone_number": "0732031204"
    }
  ]
```

### HTTP Request

`POST /v1/me/contacts/register`

### Parameters

Needs to send an `array` of `objects` with those keys:

<div class="params-table"></div>
name                 | type      | required | default     | description |
---------------------| --------- | -------- | ----------- | ----------- |
name         | `string`  | true  |         | Contact's name |
phone_number | `string`  | true  |         | Contact's phone number |

>  JSON Response

```json
  {
    "success": true,
    "data": [
      {
          "id": 5,
          "name": "George",
          "phone_number": "+33732030203",
          "impact_points": 500,
          "level": 15,
          "status_uid": "master_poi"
      },
      {
        "id": 11,
        "name": "Martha",
        "phone_number": "+33732031204",
        "impact_points": 300,
        "level": 12,
        "status_uid": "master_poi"
      }
    ]
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
      "inviter_id": 3,
      "invitee_id": 12,
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
    "count": 2,
    "data": {
      "friends": [
        {
          "id": 1,
          "name": "George",
          "phone_number": "+33732231321",
          "impact_points": 500,
          "level": 15,
          "status_uid": "master_poi"
        },
        {
          "id": 13,
          "name": "Julien",
          "phone_number": "+33738231370",
          "impact_points": 300,
          "level": 12,
          "status_uid": "master_poi"
        }
      ]
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

>  JSON Response

```json
  {
    "success": true,
    "count": 2,
    "data": {
      "friends": [
        {
          "id": 1,
          "name": "George",
          "phone_number": "+33732231321",
          "impact_points": 500,
          "level": 15,
          "status_uid": "master_poi"
        },
        {
          "id": 13,
          "name": "Julien",
          "phone_number": "+33738231370",
          "impact_points": 300,
          "level": 12,
          "status_uid": "master_poi"
        }
      ]
    }
  }
```

