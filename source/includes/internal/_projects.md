# Projects

<div class="public-endpoint"></div>
## Available Projects 

Lists all fundable projects on the Poi Network for the current user.

### HTTP Request

`GET /v1/campaigns`

### Query Parameters

<div class="params-table"></div>
name         | type      | required | default     | description |
-------------| --------- | -------- | ----------- | ----------- |
page         | `integer` |          | 1           | Page number |
per_page     | `integer` |          | 50          | Number of events per page |

>  JSON Response

```json
  {
    "data": [
      <Project>,
      <Project>,
      <Project>
    ]
  }
```

<div class="public-endpoint"></div>
## My Projects 

List all projects for the current user, categorized between `active` and the already successfuly `funded`.

### HTTP Request

`GET /v1/me/campaigns`

### Query Parameters

<div class="params-table"></div>
name         | type      | required | default     | description |
-------------| --------- | -------- | ----------- | ----------- |
page         | `integer` |          | 1           | Page number |
per_page     | `integer` |          | 50          | Number of events per page |

>  JSON Response

```json
  {
    "data": {
      "active": [
        <Project>,
        <Project>
      ],
      "funded": [
        {
          <Project>,
          <Project>
        }   
      ]
    }
  }
```

<div class="public-endpoint"></div>
## Fund a project

Allows a user to give an amount of Pois to a project.

> Request Body

```json
  {
    "id": 1,
    "amount": 10.0
  }
```

### HTTP Request

`POST /v1/me/fundings`

### Parameters

<div class="params-table"></div>
name                 | type      | required | default     | description |
---------------------| --------- | -------- | ----------- | ----------- |
id                   | `string`  | true     |         | The project's id | 
amount               | `string`  | true     |         | Amount of Pois givent to the project. | 

>  JSON Response

```json
  {
    "data": [
      <Project>,
      <Project>,
      <Project>
    ]
  }
```