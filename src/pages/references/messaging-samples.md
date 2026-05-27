---
title: Execute API-triggered campaigns (code samples)
description: Sample curl payloads for executing API-triggered campaigns (unitary and audience), aligned with the messaging OpenAPI reference.
--- 

# Execute API-triggered campaigns (code samples)

Below code snippets use sample Journey Optimizer triggered campaigns.

For each of these examples to run, you first have to create your triggered campaigns in the user interface and get ready with your Bearer token and API key. Note that these examples are written in curl but we support the language of your choice.

The full OpenAPI reference for this endpoint is [here](https://developer.adobe.com/journey-optimizer-apis/references/messaging)

\<br/\>\<br/\>

Example 1 : This example is to show how you can send an SMS Message to an existing profile in Adobe Experience Platform having phoneNumber defined.

```json
{
  "requestId": "3126743632163793",
  "campaignId": "10e2583b-4d1d-4b57-bd6e-fdc79405d67d",
  "recipients": [
    {
      "type": "aep",
      "namespace": "phone",
      "userId": "1234567890"
    }
  ]
}
```


Example 2 : This example is to show how you can send an SMS message with contextual attributes to multiple existing profiles and overriding the phoneNumber using channelData.

```json
{
  "requestId": "3126743632163793",
  "campaignId": "10e2583b-4d1d-4b57-bd6e-fdc79405d67d",
  "recipients": [
    {
      "type": "aep",
      "namespace": "phone",
      "userId": "test@gmail.com",
      "channelData": {
        "mobilePhoneNumber": "1234567890"
      },
      "context": {
        "product" : {
          "name" : "Jackets",
          "category": "Clothes"
        },
        "offerCode": "THANKSGIVING"
      }
    },
    {
      "type": "aep",
      "namespace": "phone",
      "userId": "test1@gmail.com",
      "channelData": {
        "mobilePhoneNumber": "0921234567"
      },
      "context": {
        "product" : {
          "name" : "Jackets",
          "category": "Clothes"
        },
        "offerCode": "THANKSGIVING"
      }
    }
  ]
}
```


Example 3 : This example is to show how you can send a Push Message to an existing profile.


```json
{
  "requestId": "3126743632163793",
  "campaignId": "10e2583b-4d1d-4b57-bd6e-fdc79405d67d",
  "recipients": [
    {
      "type": "aep",
      "namespace": "ecid",
      "userId": "12345678901234567890123456789493505531",
      /* User needs to configure push identity prior to execution. */
      "channelData": {
        "pushInfo": {
          "appID": "#appId#",
          "platform": "#platform#",
          "token": "#token#"
        }
      }
    }
  ]
}
```


Example 4: This example is to show how to send an Email message to an existing profile with contextual attributes (defined during campaign authoring) and personalization attributes.

```json
{
  "requestId": "3126743632163793",
  "campaignId": "10e2583b-4d1d-4b57-bd6e-fdc79405d67d",
  "recipients": [
    {
      "type": "aep",
      "namespace": "email",
      "userId": "test@gmail.com",
      "context": {
        "product" : {
          "name" : "Jackets",
          "category": "Clothes"
        },
        "offerCode": "THANKSGIVING"
      },
      "profile": {
        "person":{
          "name": {
            "firstName": "John",
            "lastName": "Chao",
            "courtesyTitle": "Mr."
          },
          "mobilePhone": {
            "number": "111-112-3456",
            "primary": true
          },
          "personalEmail": {
            "address": "ajo_im@gmail.com",
            "primary": true
          }
        }
      }
    }
  ]
}
```


Example 5: This example is to show how to send an Email message to an existing profile with contextual and personalization attributes and overriding email-Id using channelData.

```json
{
  "requestId": "3126743632163793",
  "campaignId": "10e2583b-4d1d-4b57-bd6e-fdc79405d67d",
  "recipients": [
    {
      "type": "aep",
      "namespace": "email",
      "userId": "test@gmail.com",
      "channelData": {
        "emailAddress": "test123@gmail.com"
      },
      "context": {
        "product" : {
          "name" : "Jackets",
          "category": "Clothes"
        },
        "offerCode": "THANKSGIVING"
      },
      "profile": {
        "person":{
          "name": {
            "firstName": "John",
            "lastName": "Chao",
            "courtesyTitle": "Mr."
          },
          "mobilePhone": {
            "number": "111-112-3456",
            "primary": true
          },
          "personalEmail": {
            "address": "ajo_im@gmail.com",
            "primary": true
          }
        }
      }
    }
  ]
}

```


Example 6: This example is to show how to send an Email message to an existing profile present in custom merge schema.

```json
{
  "requestId": "3126743632163793",
  "campaignId": "10e2583b-4d1d-4b57-bd6e-fdc79405d67d",
  "recipients": [
    {
      "type": "aep",
      "namespace": "email",
      "userId": "test@gmail.com",
      "mergePolicyName": "DefaultTimeBased",
      "mergePolicySchema": "_xdm.context.profile",
      "channelData": {
        "emailAddress": "test123@gmail.com"
      }
    }
  ]
}
```


Example 7: This example runs triggered marketing campaigns for a given audience with contextual attributes. Pass the campaign ID in the audience request; if contextual attributes are part of the message, include them in the payload as below.

```json
{
  "campaignId": "d54c23c4-d31c-429e-b8d1-9556b85a5b1f",
  "context": {
    "product": {
      "name": "Jackets",
      "category": "Clothes"
    },
    "offerCode": "THANKSGIVING"
  }
}
```

