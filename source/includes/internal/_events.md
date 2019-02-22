# Events & Actions

An **Event**is an user action that (usually) triggers an impact reward.<br/>
It is the primary way for sending impact data to the Poi Protocol, but is also used to trigger user's onboarding rewards and other internal rewards.

An **Action** is a type of event that has been directly triggered by the user, it doesn't encompass `referral` nor `challenge` type events.

## Event types

| name             | description                     |
| ---------------- | ------------------------------- |
| `referral:referrer` | User referred another one |
| `referral:referree` | User got referred |
| `onboarding:done` | User completed onboarding  |
| `onboarding:application` | User registered his first application |
| `application:connected` | User connectd an application | 
| `challenge:completed`    | User has completed a challenge |
| `action` | User action in any category. When emiting this type of event, you will need to provide any of the 10 categories like `consumption`, `health`, etc... as a request argument. | 

<div class="public-endpoint"></div>
## My Actions

List of all actions the user has taken on the Poi Network. This will only return

### HTTP Request

`GET /v1/me/events`

### Query Parameters

<div class="params-table"></div>
name         | type      | required | default     | description |
-------------| --------- | -------- | ----------- | ----------- |
period       | `string`  |          | global      | A time period: `week`, `month` or `global` |
page         | `integer` |          | 1           | Page number for the history |
per_page     | `integer` |          | 50          | Number of events per page in the history |

>  JSON Response

```json
  {
    "count": 15,
    "data": {
      "period": "month",
      "period_improvements": 15,
      "chart": {
        "type": "bar",
        "x_axis": ["L", "M", "M", "J", "V", "S", "D"],
        "y_axis": [0, 2, 4, 3, 6, 0, 0]
      },
      "history": [
        <Event>, 
        <Event>,
        <Event>
      ]
    }
  }
```

<div class="private-endpoint"></div>
## Emit an event

(W.I.P)

> Request Body

```json
  {
    "type": "action",
    "application_id": 2,
    "category": "mobility",
    "data": {
      "distance": 2,
      "transport": "bus"
    }
  }
```

### HTTP Request

`POST /v1/events`

### Parameters

<div class="params-table"></div>
name                 | type      | required | default     | description |
---------------------| --------- | -------- | ----------- | ----------- |
type                 | `string`  | true     |         | Type of the event, usually `action`, see [event types](#event-types) for more details. |
application_id       | `integer`  |          |         | An optional application id that triggered the event |
category             | `string`  | true     |         | The event's [category](#categories) |
data                 | `object`  | true     |         | Impact data, the data you need to send is ruled by the category, see [data by category](#data-by-category). |
 

>  JSON Response

```json
  {
    "success": true,
    "data": <Event>
  }
```
<aside class="warning">
If an event is emitted too often for a same authentified user it will be ignored as a security measure. 
Onboarding events can only be called once per account.
</aside>


## Data by category

When emiting(#emit-an-event) an event, you need to provide impact data for the Poi Network to measure the impact.
This impact data that needs to be provided in the body of the request, varies from one category to another, is listed here.

### Mobility

| name            | description               |
| --------------- | ------------------------- |
| distance        | The distance in `kilometers` |
| transport       | The mean of transport: `bus`, `train`, `scooter`, `bike`, ... |

### Consumption

| name            | description               |
| --------------- | ------------------------- |

### Recycling

| name            | description               |
| --------------- | ------------------------- |

### Citizenship

| name            | description               |
| --------------- | ------------------------- |

### Investments

| name            | description               |
| --------------- | ------------------------- |
