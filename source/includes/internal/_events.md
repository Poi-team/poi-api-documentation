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


## Emit an event

(W.I.P)
