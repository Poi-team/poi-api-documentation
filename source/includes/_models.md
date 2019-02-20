# Models

## User

```json
    {
        "id": 13,
        "uid": "daniel@gmail.com",
        "full_name": "Daniel Pollock",
        "email": "daniel@gmail.com",
        "referrer_id": 1,
        "referral_code": "84V3C",
        "phone_number": "0732233423",
        "impact": {
            "status": "Baby Poi",
            "level": 15,
            "earned_points": 4327.3,
            "spent_points": 2137.5,
            "current_points": 2198.8,
            "last_action": <Event>,
            "current_cycle": {
                "points": 137.5,
                "maximum_points": 500,
            },
            "statuses_list": {
                "baby_poi": {
                    "points_threshold": 0,
                    "has_seen_celebration": true
                },
                "young_poi": {
                    "points_threshold": 1000,
                    "has_seen_celebration": false

                },
                "yogi_poi": {
                    "points_threshold": 2000,
                    "has_seen_celebration": false

                },
                "master_poi": {
                    "points_threshold": 3000,
                    "has_seen_celebration": false

                },
                "poi_ambassador": {
                    "points_threshold": 4000,
                    "has_seen_celebration": false

                }
            },
        },
        "funded_projects": [
            {
                "id": 3,
                "name": "New Composer",
                "amount": 50.0,
            }
        ],
        "applications": [
            <Application>,
            <Application>
        ]
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
| **id**                 | `integer`       | The user's unique identifier.                                                                     |   
| **uid**                | `string`        | A unique identifier, usually the email used to identify the user.                                                |         
| **full_name**          | `string`        | User's full name.                                                                        |                       
| **email**              | `string`        | User's email address.                                                                    |
| **referrer_id**        | `integer`       | The referrer's (user that referred) id.                                                  |
| **referral_code**      | `string`        | The user's referral code, can be used by other users to register.                        |                       
| **phone_number**       | `string`        | User's phone number.                                                                     |                       
| **impact**             | `object`        | An `Impact` object. Includes impact data, the last taken action, the current gauge cycle's data and the list of all possible statuses.|
| **funded_project**     | `array`         | List of projects the use has funded.                                                     |                       
| **applications**       | `array`         | A list of suggested applications, will only be returned after a successful sign in or registration.  |                       
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
        "rating": 4.90,
        "video_url": "http://youtube.com?v=ZF269O8",
        "pictures": [
            { "type": "photo", "url": "http://aws.s3.com/xyz1" },
            { "type": "photo", "url": "http://aws.s3.com/xyz2" },
            { "type": "photo", "url": "http://aws.s3.com/xyz3" }
       ],
        "android_url": "http://play.google.com/store/apps/details?id=743082",
        "ios_url": "https://itunes.apple.com/app/id378458261",
        "web_url": "https://cityscoot.fr",
        "requested_permissions": [
            "Mesurer ton impact en matière de déplacements",
            "Te récompenser en fonction de ton usage"
        ],
        "created_at": "2018-08-17T12:24:16.477Z",
        "updated_at": "2018-08-17T12:24:18.477Z"
    }
    
```

| Attribute            | Type              | Description                                                                              |
|----------------------|-------------------|------------------------------------------------------------------------------------------|
| **id**               | `integer`       | The application's unique identifier.                                                       |   
| **name**             | `string`        | The application's name.                                                                  |         
| **category**         | `string`        | The application's category.                                                              |                       
| **description**      | `string`        | The application's description.                                                           |     
| **rating**      | `decimal`        | The application's average rating on the Play and App stores.                                                           |     
| **pictures**         | `array`         | An array of pictures.                                                                    |
| **video_url**        | `string`        | The application's video presentation url.                                                |                       
| **android_url**      | `string`        | The application's google play store url.                                                 |
| **ios_url**          | `date`          | The application's app store url.                                                         |                       
| **web_url**          | `string`        | The application's website url.                                                           |                       
| **requested_permissions**          | `array`        | A list of things the user will consent to when connecting this application to his account.                                                           |                       
| **created_at**       | `datetime`       | The application's creation date.                                                        |
| **updated_at**       | `datetime`        | The application's last update date.                                                    |                       

## Event


An **Event** is an user action that (usually) triggers an impact reward.<br/>


```json

    {
        "id": 1,
        "type": "action",
        "user": {
            "id": 1,
            "email": "gaby@poi.app"
        },
        "application": <Application>,
        "category": "consumption", 
        "total_impact": 30.0,
        "impact_detail": {
            "zero_waste": 19.7,
            "local": 10.3
        },
        "date": "2018-08-17T12:24:18.477Z"
    }
    
```

| Attribute                | Type            | Description                                                                              |
|--------------------------|-----------------|------------------------------------------------------------------------------------------|
| **id**               | `integer`       | The event's unique identifier.                                                       |   
| **type**                   | `string`        | The type of event.                    |                       
| **user**                   | `object`        | The user that triggered the event.   |           
| **application**            | `object`        | The application that emitted the event.   |                       
| **category**               | `string `       | The category of the event like `mobility`, `poi`, `health`, `consumption` ...   |
| **total_impact**           | `decimal`         | The total number of impact points this event generated.   |  
| **impact_detail**          | `object`        | The number of impact points earned by sub-category. For instance maybe your purchase in consumption was `zero_waste` and `local` granting you a few points for each category. |             
| **date**                   | `datetime`      | The moment the event took place.   |                       

## Merchant

```json
    {
        "id": 13,
        "name": "Le petit Bordelais",
        "description": "Lorem ipsum dolor es sit amet.",
        "address": "17 Rue Saint Catherine, Bordeaux",
        "quality_labels": [
            "Local",
            "Zero waste"
        ],
        "categories": [
            "Vegan",
            "Food"
        ],
        "pictures": [
            { "type": "banner", "url": "http://aws.s3.com/xyz" },
            { "type": "banner", "url": "http://aws.s3.com/xyz" },
            { "type": "photo", "url": "http://aws.s3.com/xyz" },
        ],
        "email": "petitbordelais@gmail.com",
        "phone_number": "0732233423",
        "latitude": 43.01,
        "longitude": -73.01,
        "created_at": "2018-08-17T12:24:16.477Z",
        "updated_at": "2018-08-17T12:24:18.477Z"
    }
    
```

| Attribute           | Type      | Description                                                                           |
|---------------------|-----------|---------------------------------------------------------------------------------------|
| **id**              | `integer` | The merchant's unique identifier.                                                                  |
| **name**            | `string`  | Merchant's name.                                                                      |                       
| **description**       | `string`  | Merchant's description.                                                               |                       
| **email**             | `string`  | Merchant's email address.                                                             |                       
| **address**           | `string`  | Merchant's store address.                                                             |
| **latitude**          | `decimal` | Merchant's latitude.                                                                  |                       
| **longitude**         | `decimal` | Merchant's longitude.                                                                 |                       
| **quality_labels**    | `array`  | A list of quality labels like `Local`, `Zero waste`, etc...                    |                       
| **categories**        | `array`  | A list of categories like `Restaurant`, `Vegan`, etc...                        |                       
| **pictures**          | `array`  | An array of pictures objects: `{ type: "banner", url: "http://aws.s3.com/xyz" }`. `type` can either be: `banner` or `photo`. |                       
| **phone_number**      | `string`         | Merchant's phone number.                                                         |                       

## Challenge

```json

    {
        "id":1,
        "challenger": {
            "id": 1,
            "name": "George Abitbol",
            "email": "george@gmail.com",
            "phone_number": "0683832393"
        },
        "challenged": {
            "id": null,
            "name": "Roger Abitbol",
            "email": null,
            "phone_number": "0673882392"
        },
        "status": "pending",
        "category": "mobility", 
        "timeframe": "1 week",
        "created_at": "2018-08-10T12:24:18.477Z",
        "end_date": "2018-08-17T12:24:18.477Z",
        "goal": 50.0,
        "reward": 10.0
    }
    
```

| Attribute                | Type            | Description                                                                              |
|--------------------------|-----------------|--------------------------------------|
| **id**               | `integer`       | The challenge's unique identifier.         |   
| **challenger**       | `object`        | The user that initiated the challenge.   |
| **challenged**       | `object`        | The challenged user.                     |           
| **status**           | `string`        | One of `pending`, `accepted`, `rejected`, `completed`.   |          
| **category**         | `string`       | The [category](#categories) of the challenge.   |  
| **timeframe**        | `string`       | The challenge's timeframe: `1 week`, `2 weeks`, ...   |
| **end_date**         | `datetime`     | The challenge's end date | 
| **goal**             | `decimal`      | The challenge's points goal.   |                       
| **reward**           | `decimal`      | The challenge's reward when completed.  |  
| **created_at**       | `datetime`     | The challenge's creation date.  |              


## Perk

```json
    {
        "id": 1,
        "name": "Too Good To Go - 30%",
        "description": "Get - 30% on your next too good to go purchase!",
        "picture": "https://aws.bucket.xyz/zwu.png",
        "price": 40.0,
        "amount": 30.0,
        "lifespan": "6 months",
        "is_percentage": true,
        "application": {
            "id": 5,
            "name": "Too Good To Go"
        }
    }
```

| Attribute                | Type            | Description                          |
|--------------------------|-----------------|--------------------------------------|
| **id**                   | `integer`       | The perk's unique identifier.        |   
| **name**                 | `string`        | The perk's name.                     |
| **description**          | `string`        | The perk's description.              |           
| **picture**              | `string`        | The perk's picture url.              |
| **amount**               | `decimal`       | The amount of discount.              | 
| **price**                | `decimal`       | The perk's price in Pois.            |  
| **lifespan**             | `string`        | For how long can the perk be used before it expires. |
| **is_percentage**        | `boolean`       | Is the discount flat cash or a percent discount? |
| **application**          | `object`        | The application offering the discount. | 


## Project

```json
    {
       "id": 13,
       "name": "Le petit Bordelais",
       "description": "Lorem ipsum dolor es sit amet.",
       "status": "active", 
       "total_funded": 200, 
       "supporters_ount": 5, 
       "pictures": [
            { "kind": "banner", "url": "http://aws.s3.com/xyz" },
            { "kind": "banner", "url": "http://aws.s3.com/xyz" },
            { "kind": "photo", "url": "http://aws.s3.com/xyz" },
        ],
        "created_at": "2018-08-10T12:24:18.477Z"
    }
```

| Attribute                | Type            | Description                          |
|--------------------------|-----------------|--------------------------------------|
| **id**                   | `integer`       | The project's unique identifier.        |   
| **name**                 | `string`        | The project's name.                     |
| **description**          | `string`        | The project's description.              |         
| **pictures**              | `object`        | The project's pictures as an object.   |
| **total_funded**        | `decimal`         | The total number of Pois funded into the project |
| **supporters_count**          | `integer`  | The number of people that participated in funding this project. | 
| **status**              | `string` | The status of the project, either `funded` if it has been successfuly funded and is now done, or `active`.
| **created_at**          | `datetime`        | The funding campaign's inception date | 

## Categories 

Here is a list of all available categories.

| name | description |
| --------- | ---------------- |
| **Mobility** |                    |
| **Consumption** |                  |
| **Recycling** |                  |
| **Citizenship** |                  |
| **Investiments** |                  |
| **Bonus** | All user actions that helped the Poi Network, this includes sign up, challenges, etc... |
