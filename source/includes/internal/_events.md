# Events

An **Event** is an user action that (usually) triggers an impact reward.<br/>
It is the primary way for sending impact data to the Poi Protocol, but is also used to trigger user's onboarding rewards and other internal rewards.

## Event types

| name             | description                     |
| ---------------- | ------------------------------- |
| `referral:referrer` | User referred another one |
| `referral:referree` | User got referred |
| `onboarding:done` | User completed onboarding  |
| `onboarding:application` | User registered his first application |
| `application:connected` | User connectd an application | 
| `action` | User action in any category. You will need to provide any of the 10 categories like `consumption`, `health`, etc... as a request argument. | 

<aside class="warning">
If an event is emitted too often for a same authentified user it will be ignored as a security measure. 
Onboarding events can only be called once per account.
</aside>

<div class="public-endpoint"></div>
## My Events

List of all actions the user has taken on the Poi Network.

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



## Emit an event

(W.I.P)
