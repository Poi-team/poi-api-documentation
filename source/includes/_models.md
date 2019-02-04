# Models

## User

```json
    {
        "id": 13,
        "uid": "daniel@gmail.com",
        "first_name": "Daniel",
        "last_name": "Pollock",
        "full_name": "Daniel Pollock",
        "email": "daniel@gmail.com",
        "birthday": "1988-08-24",
        "referrer_code": "33J4B",
        "referrer_id": 1,
        "referral_code": "84V3C",
        "phone_number": "0732233423",
        "avatar": "https://aws.bucket.com/xyz.png",
        "impact": {
          "status": "Super Poi",
          "level": 15,
          "earned_points": 4327.3,
          "spent_points": 2137.5,
          "last_action": <Event>,
          "current_cycle": {
            "points": 137.5,
            "maximum_points": 500,
          }
        },
        "levels_list": {
            "Baby Poi": {
                "points_threshold": 0,
                "users_percentil": 30
            },
            "Young Poi": {
                "points_threshold": 1000,
                "users_percentil": 10

            },
            "Yogi Poi": {
                "points_threshold": 2000,
                "users_percentil": 10

            },
            "Master Poi": {
                "points_threshold": 3000,
                "users_percentil": 30

            },
            "Poi Ambassador": {
                "points_threshold": 4000,
                "users_percentil": 10

            }
        },
        "funded_projects": [
            {
                "id": 3,
                "name": "New Composer",
                "amount": 50.0,
            }
        ],
        "connected_apps": [
            {
                "id": 5,
                "name": "Cityscoot",
                "icon": "https://aws.bucket.com/icon-cts.png",
                "email": "daniel.pollock@gmail.com",
                "category": "Mobility"
            },
            {
                "id": 3,
                "name": "Too Good To Go",
                "icon": "https://aws.bucket.com/icon-tgt.png",
                "email": "daniel@gmail.com",
                "category": "Consumption"
            }
        ],
        "created_at": "2018-08-17T12:24:16.477Z",
        "updated_at": "2018-08-17T12:24:18.477Z"

    }
    
```
| Attribute            | Type              | Description                                                                              |
|----------------------|-------------------|------------------------------------------------------------------------------------------|
| **id**                 | `integer`       | A unique identifier.                                                                     |   
| **uid**                | `string`        | A unique email used to identify the user.                                                |         
| **first_name**         | `string`        | User's full name.                                                                        |                       
| **last_name**          | `string`        | User's full name.                                                                        |                       
| **full_name**          | `string`        | User's full name.                                                                        |                       
| **email**              | `string`        | User's email address.                                                                    |
| **birthday**           | `date`          | User's birthday.                                                                         |                       
| **referrer_code**      | `string`        | The referral code the user got referred by.                                              |                       
| **referrer_id**        | `integer`       | The referrer's (user that referred) id.                                                  |
| **referral_code**      | `string`        | The user's referral code, can be used by other users to register.                        |                       
| **avatar**             | `string`        | User's avatar url.                                                                       |
| **phone_number**       | `string`        | User's phone number.                                                                     |                       
| **impact**             | `object`        | An `Impact` object. Includes global impact data, the last taken action and the current gauge cycle's data.|
| **levels_list**        | `object`        | List of all the levels and the number of users by levels.                                |                       
| **funded_project**     | `array`         | List of projects the use has funded.                                                     |                       
| **connected_apps**     | `array`         | List of all connected apps.                                                              |                       
| **created_at**         | `date`          | User's inscription date.                                                                 |                       
| **updated_at**         | `date`          | Last user's update.                                                                      |                       

## Application

```json
    {
        "id": 13,
        "name": "Cityscoot",
        "category": "Mobility",
        "description": "Lorem ipsum, dolor es scoot amet",
        "video_url": "http://youtube.com?v=ZF269O8",
        "pictures": [
            { "kind": "photo", "url": "http://aws.s3.com/xyz1" },
            { "kind": "photo", "url": "http://aws.s3.com/xyz2" },
            { "kind": "photo", "url": "http://aws.s3.com/xyz3" }
       ],
        "android_url": "http://play.google.com/store/apps/details?id=743082",
        "ios_url": "https://itunes.apple.com/app/id378458261",
        "web_url": "https://cityscoot.fr",
        "created_at": "2018-08-17T12:24:16.477Z",
        "updated_at": "2018-08-17T12:24:18.477Z"
    }
    
```

| Attribute            | Type              | Description                                                                              |
|----------------------|-------------------|------------------------------------------------------------------------------------------|
| **id**               | `integer`       | The application unique identifier.                                                       |   
| **name**             | `string`        | The application's name.                                                                  |         
| **category**         | `string`        | The application's category.                                                              |                       
| **description**      | `string`        | The application's description.                                                           |     
| **pictures**         | `array`         | An array of pictures.                                                                    |
| **video_url**        | `string`        | The application's video presentation url.                                                |                       
| **android_url**      | `string`        | The application's google play store url.                                                 |
| **ios_url**          | `date`          | The application's app store url.                                                         |                       
| **web_url**          | `string`        | The application's website url.                                                           |                       
| **created_at**       | `datetime`       | The application's creation date.                                                        |
| **updated_at**       | `datetime`        | The application's last update date.                                                    |                       

## Event

An event is an user action that triggers either a reward (in the appropriate reward currency) or awards impact points to a user. They are for the most part automaticaly handled when a transaction occurs on the blockchain, but some events are not transaction-based: a share on facebook, a referal... And those need to be triggered from the app.

In production, if an event is emitted too often for a same authentified user it will be ignored as a security measure. Onboarding events can only be called once per account.

```json

    {
      "type": "referall",
      "subject": <User>,
      "emitter": <User>,
      "impact": {
        "points_earned": 310.5,
        "points_details": {
          "poi_dev_referall": 310.5
        }
      }
    }
    
```

| Attribute                | Type            | Description                                                                              |
|--------------------------|-----------------|------------------------------------------------------------------------------------------|
| `type`                   | _String_        | The type of event, either `share`, `referall` `onboarding:topup`, `onboarding:project` or `onboarding:finish`                         |                       
| `subject`                | _Object_        | The subject of the event, usually a `<User>` or `<Merchant>`.                            |                       
| `emitter`                | _Object_        | The emitter of the event, usually a `<Transaction>` or `<User`>.                         |                       
| `impact`                 | _Objectt_       | An object holding the number of points earned, and the detail.                           |

## Merchant

```json
    {
       "id": 13,
       "name": "Le petit Bordelais",
       "description": "Lorem ipsum dolor es sit amet.",
       "address": "17 Rue Saint Catherine, Bordeaux",
       "opening_hours": {
         "monday": "08h00 à 18h00",
         "tuesday": "08h00 à 19h00",
         "wednesday": "08h00 à 19h00",
         "thursday": "08h00 à minuit",
         "friday": "08h00 à minuit",
         "saturday": "08h30 à minuit",
         "sunday": "08h30 à 18h30",
         "complementary_info": "Les services se font le midi de 12h00 à 14h00 et le soir de 19h30 à 22h00, Le dimanche, le brunch est servi à 11h30 et à 14h."
       },
       "quality_labels": [
            "Local",
            "Zero waste"
       ],
       "categories": [
            "Vegan",
            "Food"
       ],
       "pictures": [
            { "kind": "banner", "url": "http://aws.s3.com/xyz" },
            { "kind": "banner", "url": "http://aws.s3.com/xyz" },
            { "kind": "photo", "url": "http://aws.s3.com/xyz" },
       ],
       "email": "petitbordelais@gmail.com",
       "phone_number": "0732233423",
       "latitude": 43.01,
       "longitude": -73.01,
       "wallet_id": 3,
       "ecosystem": {
            "id": 1,
            "name:" "Darwin"
        },
        "created_at": "2018-08-17T12:24:16.477Z",
        "updated_at": "2018-08-17T12:24:18.477Z"
    }
    
```

| Attribute           | Type      | Description                                                                           |
|---------------------|-----------|---------------------------------------------------------------------------------------|
| `id`                | _Integer_ | A unique identifier.                                                                  |
| `uid   `            | _String_  | A unique value that is used to identify the user during auth requests. Will only be returned in `/merchants/me` requests. |     
| `name`              | _String_  | Merchant's name.                                                                      |                       
| `description`       | _String_  | Merchant's description.                                                               |                       
| `email`             | _String_  | Merchant's email address.                                                             |                       
| `address`           | _String_  | Merchant's store address.                                                             |
| `latitude`          | _Decimal_ | Merchant's latitude.                                                                  |                       
| `longitude`         | _Decimal_ | Merchant's longitude.                                                                 |                       
| `opening_hours`     | _Object_  | An object containing formatted opening hours.                                         | 
| `quality_labels`    | _Array[String]_  | A list of quality labels like `Local`, `Zero waste`, etc...                    |                       
| `categories`        | _Array[String]_  | A list of categories like `Restaurant`, `Vegan`, etc...                        |                       
| `pictures`          | _Array[Object]_  | An array of pictures objects: `{ kind: "banner", url: "http://aws.s3.com/xyz" }`. `kind` can either be: `banner` or `photo`. |                       
| `phone_number`      | _String_         | Merchant's phone number.                                                              |                       
| `impact`             | _Object_        | An `<Impact>` object with `score` (_Integer_), `next_level_goal` (_Integer_) attributes. e.g: `{ score: 0, next_level_goal: 1000 }` |                
| `wallet_id`          | _Integer_       | Merchant's wallet_id.                                                                 |
| `ecosystem`          | _Object_        | An object representing the ecosystem the merchant is in.                              |
