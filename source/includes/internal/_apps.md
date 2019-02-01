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
