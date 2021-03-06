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
        "earned_points": 4327,
        "spent_points": 2137,
        "current_points": 2198,
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
        },
        "category": {
          "title": "Consommation",
          "description": "Poiem ipsum dolor es sit amet."
        }
      },
      "mobility": {
        "level": 4,
        "earned_points": 1350,
        "current_cycle": {
            "points": 350,
            "maximum_points": 800
        },
        "category": {
          "title": "Mobilité",
          "description": "Poiem ipsum dolor es sit amet."
        }
      },
       "bonus": {
        "level": 1,
        "earned_points": 0,
        "current_cycle": {
            "points": 0,
            "maximum_points": 500
        },
        "category": {
          "title": "Bonus",
          "description": "Poiem ipsum dolor es sit amet non secitur.",
          "actions": [
              {
                  "title": "Connecter une app",
                  "reward": 5
              },
              {
                  "title": "Parrainer un ami",
                  "reward": 10
              },
              {
                  "title": "Défier un ami",
                  "reward": 10
              }
            ]
          }
        }
      },
      "statuses_list": {
        "baby_poi": {
          "name": "Baby poi",
          "level_threshold": 0
        },
        "young_poi": {
          "name": "Young poi",
          "level_threshold": 2
        },
        "yogi_poi": {
          "name": "Yogi poi",
          "level_threshold": 5
        },
        "master_poi": {
          "name": "Master poi",
          "level_threshold": 15
        },
        "poi_ambassador": {
          "name": "Poi ambassador",
          "level_threshold": 30
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