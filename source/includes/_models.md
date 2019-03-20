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
            "status_uid": "baby_poi",
            "status": "Baby Poi",
            "level": 15,
            "earned_points": 4327.3,
            "spent_points": 2137.5,
            "current_points": 2198.8,
            "last_actions": [<Event>, <Event>, <Event>],
            "current_cycle": {
                "points": 137.5,
                "maximum_points": 500,
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
        },
        "funded_projects": [
            {
                "id": 3,
                "name": "New Composer",
                "amount": 50.0,
            }
        ],
        "suggested_applications": [
            <Application>,
            <Application>
        ],
        "apps_to_connect": [
            {
                "id": 5,
                "name": "Cityscoot",
                "icon": "https://aws.bucket.com/icon-cts.png",
                "category": "Mobility"
            },
            {
                "id": 3,
                "name": "Too Good To Go",
                "icon": "https://aws.bucket.com/icon-tgt.png",
                "category": "Consumption"
            }
        ],
        "connected_apps": [
            {
                "id": 5,
                "name": "Cityscoot",
                "icon": "https://aws.bucket.com/icon-cts.png",
                "category": "Mobility",
                "email": "daniel.pollock@gmail.com",
                "status": "connected",
            },
            {
                "id": 3,
                "name": "Too Good To Go",
                "icon": "https://aws.bucket.com/icon-tgt.png",
                "category": "Consumption",
                "email": "daniel@gmail.com",
                "status": "disconnected",
            }
        ],
        "challenges": {
            "sent": [
                <Challenge>,
                <Challenge>,
                <Challenge>
            ],
            "received": [
                <Challenge>
            ]
        },
        "friends": {
            "invited": [
                {
                    "inviter_id": 3,
                    "invitee_id": 12,
                    "name": "Nathan",
                    "phone_number": "+3367809832",
                    "status": "accepted"
                },
                {
                    "inviter_id": 3,
                    "invitee_id": null,
                    "name": "Lisa",
                    "phone_number": "+3376809872",
                    "status": "pending"
                }
            ],
            "friends": [
                {
                    "id": 2,
                    "name": "Jeremy Andre",
                    "phone_number": "+33683853938",
                    "impact_points": 0,
                    "level": 1,
                    "status_uid": "baby_poi"
                },
                {
                    "id": 2,
                    "name": "Martha Andre",
                    "phone_number": "+33683853938",
                    "impact_points": 0,
                    "level": 1,
                    "status_uid": "baby_poi"
                }
            ],
            "suggested_friends": [
                {
                    "id": 3,
                    "name": "Gaby",
                    "phone_number": "+33683853679",
                    "impact_points": 3,
                    "level": 1,
                    "status_uid": "baby_poi"
                }
            ]
        },
        "perks": [
            <Perk>,
            <Perk>
        ],
        "projects": {
            "spotlight": [
                <Project>,
                <Project>
            ],
            "projects": [
                <Project>,
                <Project>
            ]
        },
        "categories": [
            {
                "mobility": {
                    "title": "Mobilité",
                    "description": "Poi détermine ton épargne carbone par km selon les moyens de transport que tu choisis. (Base de référence : émission de CO2 pour une personne seule dans sa voiture à essence)"
                }
            },
            {
                "recycling": {
                    "title": "Recyclage",
                    "description": "Poiem ipsum dolor es sit amet non secitur."
                }
            },
            {
                "consumption": {
                    "title": "Consommation",
                    "description": "Poiem ipsum dolor es sit amet non secitur."
                }
            }
        ],
        "created_at": "2018-08-17T12:24:16.477Z",
        "updated_at": "2018-08-17T12:24:18.477Z"

    }
    
```
| Attribute            | Type              | Description                                                                              |
|----------------------|-------------------|------------------------------------------------------------------------------------------|
| **id**                 | `integer`       | The user's unique identifier.                                                            | 
| **uid**                | `string`        | A unique identifier, usually the email used to identify the user.      |         
| **full_name**          | `string`        | User's full name.                                                                        | 
| **email**              | `string`        | User's email address.                                                                    |
| **referrer_id**        | `integer`       | The referrer's (user that referred) id.                                                  |
| **referral_code**      | `string`        | The user's referral code, can be used by other users to register.                        | 
| **phone_number**       | `string`        | User's phone number.                                                                     |
| **impact**             | `object`        | An `Impact` object. Includes impact data, the last taken action, the current gauge cycle's data and the list of all possible statuses.|
| **projects**           | `object`         | A list of impact projects that might interest the user. Also returns the current spotlighted projects.     | 
| **funded_project**     | `array`         | List of projects the use has funded.                                                     | 
| **perks**           | `array`         | A list of perks that might interest the user.  | 
| **suggested_applications**       | `array`         | A list of suggested applications, will only be returned after a successful sign in or registration.  |                       
| **apps_to_connect**     | `array`         | List of 8 apps that can be connected. |                       
| **connected_apps**     | `array`         | List of all connected apps.          |                
| **challenges**     | `object`         | List of sent and received challenges.    |                       
| **friends**     | `object`         | List of friends, friends suggestions and invitations for the user. |                 
| **categories**     | `object`         | List all available categories with names and detail.                  |                       
| **created_at**         | `date`          | User's inscription date.                                                                 | 
| **updated_at**         | `date`          | Last user's update.                                                                      |                       

## Application

```json
    {
        "id": 13,
        "name": "Cityscoot",
        "uid": "cityscoot",
        "tagline": "La mobilité facile",
        "category": "Mobility",
        "description": "Lorem ipsum, dolor es scoot amet",
        "rating": 4.90,
        "video_url": "http://youtube.com?v=ZF269O8",
        "banner": "http://aws.s3.com/xyz1",
        "icon": "http://aws.s3.com/xyz1", 
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
        "poi_earn_tagline": "Roulez plus pour gagner plus de Poi !",
        "created_at": "2018-08-17T12:24:16.477Z",
        "updated_at": "2018-08-17T12:24:18.477Z"
    }
    
```

| Attribute            | Type              | Description                                                                              |
|----------------------|-------------------|------------------------------------------------------------------------------------------|
| **id**               | `integer`       | The application's unique identifier.                                                       |   
| **name**             | `string`        | The application's name.                                                                    |    
| **uid**               | `string`       | The application's unique name, this will never change even if the application is renamed.  |   
| **tagline**             | `string`        | The application's tagline.                                                            |         
| **category**         | `string`        | The application's category.                                                              |                       
| **description**      | `string`        | The application's description.                                                           |     
| **rating**      | `decimal`        | The application's average rating on the Play and App stores.                                 |     
| **icon**         | `string`         | The app's icon image.  |
| **banner**         | `string`         | The app's banner image.  |
| **pictures**         | `array`         | An array of pictures, including icons, banners, and in app screenshots.                                                                    |
| **video_url**        | `string`        | The application's video presentation url.                                                |                       
| **android_url**      | `string`        | The application's google play store url.                                                 |
| **ios_url**          | `date`          | The application's app store url.                                                         |                       
| **web_url**          | `string`        | The application's website url.                                                           |                       
| **requested_permissions**          | `array`        | A list of things the user will consent to when connecting this application to his account.                                                           |
| **poi_earn_tagline**   | `string`        | A short text explaining how this application will help you earn more Pois.   |         
| **created_at**       | `datetime`       | The application's creation date.                                                        |
| **updated_at**       | `datetime`        | The application's last update date.                                                    |                       

## Event


An **Event** is an user action that (usually) triggers an impact reward.<br/>


```json

    {
        "id": 1,
        "type": "action",
        "title": "Trajet effectué",
        "icon": "https://aws.xyz/logo.png",
        "user": {
            "id": 1,
            "email": "gaby@poi.app"
        },
        "application": <Application>,
        "category": "consumption", 
        "earned_points": 30.0,
        "date": "2018-08-17T12:24:18.477Z"
    }
    
```

| Attribute                | Type            | Description                                                                              |
|--------------------------|-----------------|------------------------------------------------------------------------------------------|
| **id**               | `integer`       | The event's unique identifier.                                                       |   
| **type**                   | `string`        | The [type of event](#event-types).                    |
| **title**                  | `string`        | A title describing the event.                    |                       
| **icon**                  | `string`        | The url of the event's icon.      |                       
| **user**                   | `object`        | The user that triggered the event.   |           
| **application**            | `object`        | The application that emitted the event.   |                       
| **category**               | `string `       | The category of the event like `mobility`, `poi`, `health`, `consumption` ...   |
| **earned_points**           | `decimal`         | The total number of impact points this event generated.   |  
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
        "id": 1,
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
        "categoryLabel": "Mobilité",
        "timeframe": "1 semaine",
        "created_at": "2018-08-10T12:24:18.477Z",
        "end_date": "2018-08-17T12:24:18.477Z",
        "goal": 50.0,
        "score": 0.0,
        "reward": 10.0,
        "tips": [
            {
                "name": "Lime",
                "picture": "https://poi-api.s3.amazonaws.com/application/icon/246x0w.jpg",
                "tip": "Faire un trajet"
            }
        ]
    }
    
```

| Attribute                | Type            | Description                                                                              |
|--------------------------|-----------------|--------------------------------------|
| **id**               | `integer`       | The challenge's unique identifier.         |   
| **challenger**       | `object`        | The user that initiated the challenge.   |
| **challenged**       | `object`        | The challenged user.                     |        
| **status**           | `string`        | One of `pending`, `accepted`, `rejected`, `completed`.   |          
| **category**         | `string`       | The [category](#categories) of the challenge.   |
| **categoryLabel**         | `string`       | The translated label for the category.   |  
| **timeframe**        | `string`       | The challenge's timeframe: `1 week`, `2 weeks`, ...   |
| **end_date**         | `datetime`     | The challenge's end date | 
| **score**             | `decimal`      | The user's current score.   |                   
| **goal**             | `decimal`      | The challenge's points goal.   |                   
| **reward**           | `decimal`      | The challenge's reward when completed.  |  
| **tips**             | `array`        | An array of tips and suggested apps (with icons) to help complete the challenge.  |  
| **created_at**       | `datetime`     | The challenge's creation date.  |              


## Perk

```json
    {
        "id": 1,
        "name": "Too Good To Go - 30%",
        "tagline": "Lorem ipsum",
        "success_label": "Profitez bien de votre offre Too Good To Go !",
        "description": "Get - 30% on your next too good to go purchase!",
        "icon": "https://aws.bucket.xyz/zwu.png",
        "banner": "https://aws.bucket.xyz/xwu.png",
        "price": 40.0,
        "amount": 30.0,
        "lifespan": "6 months",
        "is_percentage": true,
        "application": {
            "id": 5,
            "category": "consumption",
            "name": "Too Good To Go"
        }
    }
```

| Attribute                | Type            | Description                          |
|--------------------------|-----------------|--------------------------------------|
| **id**                   | `integer`       | The perk's unique identifier.        |   
| **name**                 | `string`        | The perk's name.                     |
| **tagline**              | `string`        | The perk's tagline.                     |
| **success_label**        | `string`        | A text that will be displayed to the user upon purchase.  |
| **description**          | `string`        | The perk's description.              |           
| **icon**              | `string`        | The perk's icon url.              |
| **banner**              | `string`        | The perk's banner url.              |
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
        "tagline": "Lorem ipsum",
        "success_label": "L'association Le Petit Bordelais vous remercie !",
        "description": "Lorem ipsum dolor es sit amet.",
        "status": "active", 
        "total_funded": 200, 
        "supporters_ount": 5, 
        "banner": "http://aws.s3.com/xyz",
        "icon": "http://aws.s3.com/xyz",
        "created_at": "2018-08-10T12:24:18.477Z"
    }
```

| Attribute                | Type            | Description                          |
|--------------------------|-----------------|--------------------------------------|
| **id**                   | `integer`       | The project's unique identifier.        |   
| **name**                 | `string`        | The project's tagline.                     |
| **tagline**                 | `string`        | The project's tagline.                     |
| **success_label**        | `string`        | A text that will be displayed to the user upon purchase.  |
| **description**          | `string`        | The project's description.              |         
| **banner**              | `string`        | The project's banner.   |
| **icon**              | `string`        | The project's icon.   |
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
| **Investments** |                  |
| **Bonus** | All user actions that helped the Poi Network, this includes sign up, challenges, etc... |

## Initial Data

Sends user data along with a lot of information the apps need to draw the initial pages. This is a mix of /me and a bunch of other endpoints, plus the static pages like ToS, FAQ, etc...

```json
    {
        "id": 13,
        "uid": "daniel@gmail.com",
        "full_name": "Daniel Pollock",
        "email": "daniel@gmail.com",
        "referrer_id": 1,
        "referral_code": "84V3C",
        "phone_number": "0732233423",
        "created_at": "2018-08-17T12:24:16.477Z",
        "updated_at": "2018-08-17T12:24:18.477Z",
        "impact": {
            "status_uid": "baby_poi",
            "status": "Baby Poi",
            "level": 15,
            "earned_points": 4327.3,
            "spent_points": 2137.5,
            "current_points": 2198.8,
            "last_actions": [<Event>, <Event>, <Event>],
            "current_cycle": {
                "points": 137.5,
                "maximum_points": 500,
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
        },
        "funded_projects": [
            {
                "id": 3,
                "name": "New Composer",
                "amount": 50.0,
            }
        ],
        "suggested_applications": [
            <Application>,
            <Application>
        ],
        "apps_to_connect": [
            {
                "id": 5,
                "name": "Cityscoot",
                "icon": "https://aws.bucket.com/icon-cts.png",
                "category": "Mobility"
            },
            {
                "id": 3,
                "name": "Too Good To Go",
                "icon": "https://aws.bucket.com/icon-tgt.png",
                "category": "Consumption"
            }
        ],
        "connected_apps": [
            {
                "id": 5,
                "name": "Cityscoot",
                "icon": "https://aws.bucket.com/icon-cts.png",
                "category": "Mobility",
                "email": "daniel.pollock@gmail.com",
                "status": "connected",
            },
            {
                "id": 3,
                "name": "Too Good To Go",
                "icon": "https://aws.bucket.com/icon-tgt.png",
                "category": "Consumption",
                "email": "daniel@gmail.com",
                "status": "disconnected",
            }
        ],
        "challenges": {
            "sent": [
                <Challenge>,
                <Challenge>,
                <Challenge>
            ],
            "received": [
                <Challenge>
            ]
        },
        "friends": {
            "invited": [
                {
                    "inviter_id": 3,
                    "invitee_id": 12,
                    "name": "Nathan",
                    "phone_number": "+3367809832",
                    "status": "accepted"
                },
                {
                    "inviter_id": 3,
                    "invitee_id": null,
                    "name": "Lisa",
                    "phone_number": "+3376809872",
                    "status": "pending"
                }
            ],
            "friends": [
                {
                    "id": 2,
                    "name": "Jeremy Andre",
                    "phone_number": "+33683853938",
                    "impact_points": 0,
                    "level": 1,
                    "status_uid": "baby_poi"
                },
                {
                    "id": 2,
                    "name": "Martha Andre",
                    "phone_number": "+33683853938",
                    "impact_points": 0,
                    "level": 1,
                    "status_uid": "baby_poi"
                }
            ],
            "suggested_friends": [
                {
                    "id": 3,
                    "name": "Gaby",
                    "phone_number": "+33683853679",
                    "impact_points": 3,
                    "level": 1,
                    "status_uid": "baby_poi"
                }
            ]
        },
        "perks": [
            <Perk>,
            <Perk>
        ],
        "projects": {
            "spotlight": [
                <Project>,
                <Project>
            ],
            "projects": [
                <Project>,
                <Project>
            ]
        },
        "categories": [
            {
                "mobility": {
                    "title": "Mobilité",
                    "description": "Poi détermine ton épargne carbone par km selon les moyens de transport que tu choisis. (Base de référence : émission de CO2 pour une personne seule dans sa voiture à essence)"
                }
            },
            {
                "recycling": {
                    "title": "Recyclage",
                    "description": "Poiem ipsum dolor es sit amet non secitur."
                }
            },
            {
                "consumption": {
                    "title": "Consommation",
                    "description": "Poiem ipsum dolor es sit amet non secitur."
                }
            }
        ],
       "static_pages": {
            "faq": [
                {
                    "title": "Paiements, annulations et délai de réflexion",
                    "content": [
                        {
                            "subtitle": "Facturation",
                            "paragraphs": [
                                "Lorem ipsum dolor es sit amet",
                                "Lorem ipsum dolor es sit amet"
                            ]
                        },
                        {
                            "subtitle": "Annulation",
                            "paragraphs": [
                                "Lorem ipsum dolor es sit amet",
                                "Lorem ipsum dolor es sit amet"
                            ]
                        }
                    ]
                }
            ],
            "tos": [
                {
                    "title": "Qui sommes-nous ?",
                    "content": [
                        {
                            "subtitle": "Qui sommes-nous ?",
                            "paragraphs": [
                                "Derrière Poi, il y a la société GIN (Good Impact Network) composée d'une équipe de passionnés venant de l'entrepreneuriat social et de l'économie collaborative. Nous sommes animés par une mission, créer un mouvement massif qui reconnaisse les contributions de chacun à un monde plus durable. À l'opposé du pessimisme écologique ou social actuel, nous militons pour un optimisme contagieux qui donne envie d'agir. C'est la vocation de Poi."
                            ]
                        }
                    ]
                },
                {
                    "title": "La jauge d'impact",
                    "content": [
                        {
                            "subtitle": "Comment puis-je gagner des points dans ma jauge d'impact ?",
                            "paragraphs": [
                                "Pour gagner des points dans votre jauge, il vous suffit de consommer chez un commerçant détenant des labels validés par la communauté. Pour calculer le nombre de points reçus le montant de la transaction est multiplié par la somme des coefficients des labels détenus par le commerçant. Par exemple si vous dépensez 10€ dans un épicerie ayant les labels bio et local équivalent à 0,5 chacun, vous gagnerez 10x(2x0,5)= 10 points. Vous pouvez également gagnez des points en parrainnant des amis sur l'app."
                            ]
                        },
                        {
                            "subtitle": "Comment fonctionne ma jauge d'impact ?",
                            "paragraphs": [
                                "La jauge contient 1000 points. Pour gagner des points dans vote jauge, il vous suffit de consommer chez un commerçant détenant des labels validés par la communauté. Pour calculer le nombre de points reçus le montant de la transaction est multiplié par la somme des coefficients des labels détenus par le commerçant. Vous pouvez également gagnez des points en parrainnant des amis sur l'app. C'est l'effort sur la qualité de votre consommation quotidienne qui vous permettra de remplir au plus vite votre jauge."
                            ]
                        }
                    ]
                }
            ]
        }
    }
    
```
| Attribute            | Type              | Description                                                                              |
|----------------------|-------------------|------------------------------------------------------------------------------------------|
| **id**                 | `integer`       | The user's unique identifier.                                                            | 
| **uid**                | `string`        | A unique identifier, usually the email used to identify the user.      |         
| **full_name**          | `string`        | User's full name.                                                                        | 
| **email**              | `string`        | User's email address.                                                                    |
| **referrer_id**        | `integer`       | The referrer's (user that referred) id.                                                  |
| **referral_code**      | `string`        | The user's referral code, can be used by other users to register.                        | 
| **phone_number**       | `string`        | User's phone number.    |
| **created_at**         | `date`          | User's inscription date.          | 
| **updated_at**         | `date`          | Last user's update. |
| **impact**             | `object`        | An `Impact` object. Includes impact data, the last taken action, the current gauge cycle's data and the list of all possible statuses.|
| **projects**           | `object`         | A list of impact projects that might interest the user. Also returns the current spotlighted projects.     | 
| **funded_project**     | `array`         | List of projects the use has funded.                                                     | 
| **perks**           | `array`         | A list of perks that might interest the user.  | 
| **suggested_applications**       | `array`         | A list of suggested applications, will only be returned after a successful sign in or registration.  |                       
| **apps_to_connect**     | `array`         | List of 8 apps that can be connected. |                       
| **connected_apps**     | `array`         | List of all connected apps.          |                
| **challenges**     | `object`         | List of sent and received challenges.    |                       
| **friends**     | `object`         | List of friends, friends suggestions and invitations for the user. |                 
| **categories**     | `object`         | List all available categories with names and detail.  |
| **static_pages** | `object` | List of all static pages as objects. The structure is always the same, just look at the examples and you should get it easily. |