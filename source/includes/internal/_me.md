# Me

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
## My Impact

Gets the current user's impact data grouped by [categories](#categories).

### HTTP Request

`GET /v1/me/impacts`

>  JSON Response

```json
  {
    "data": {
      "global": {
        "status": "Baby Poi",
        "level": 15,
        "earned_points": 4327.3,
        "spent_points": 2137.5,
        "current_points": 2198.8,
        "current_cycle": {
            "points": 137.5,
            "maximum_points": 500,
        }
      },
      "consumption": {
        "level": 1,
        "earned_points": 102,
        "current_cycle": {
            "points": 102,
            "maximum_points": 500
        }
      },
      "mobility": {
        "level": 4,
        "earned_points": 1350,
        "current_cycle": {
            "points": 350,
            "maximum_points": 800
        }
      },
       "health": {
        "level": 1,
        "earned_points": 0,
        "current_cycle": {
            "points": 0,
            "maximum_points": 500
        }
      }
    }
  }
```

<div class="public-endpoint"></div>
## Update my settings

> Request Body

```json
  {
    "notifications_active": false
  }
```

### HTTP Request

`PUT /v1/me/settings`

### Parameters

<div class="params-table"></div>
name                 | type      | required | default     | description |
---------------------| --------- | -------- | ----------- | ----------- |
notifications_active | `boolean`  |          | true        | Are notifications enabled for the user |

>  JSON Response

```json
  {
    "success": true,
    "data": {
      "notifications_active": false
    }
  }
```