---
title: Trigger campaigns using APIs - Code examples
description: Trigger campaigns using APIs - Code examples
--- 

# Trigger campaigns using APIs - Code examples

Below code snippets are using sample Adobe Journey Optimizer API-triggered campaigns.

For each of these examples to run, you first have to create your API-triggered campaigns in the user interface and get ready with your Bearer token and API key. Note that these examples are written in curl but we support the language of your choice.

A detailed description of the API is available [here](https://developer.adobe.com/journey-optimizer-apis/references/messaging/)

<br/><br/>

<summary>Example 1 : This example is to show how you can send an SMS Message to an existing profile in Adobe Experience Platform having phoneNumber defined.</summary>
<p>

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

</p>

<summary>Example 2 : This example is to show how you can send an SMS message with contextual attributes to multiple existing profiles and overriding the phoneNumber using channelData.</summary>
<p>

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

</p>

<summary>Example 3 : This example is to show how you can send a Push Message to an existing profile.</summary>

<p>

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

</p>

<summary>Example 4: This example is to show how to send an Email message to an existing profile with contextual attributes (defined during campaign authoring) and personalization attributes. </summary>
<p>

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

</p>

<summary>Example 5: This example is to show how to send an Email message to an existing profile with contextual and personalization attributes and overriding email-Id using channelData. </summary>
<p>

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

</p>

<summary>Example 6: This example is to show how to send an Email message to an existing profile present in custom merge schema.</summary>
<p>

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

</p>

<summary>Example 7: This example is to execute API-triggered marketing campaigns to a given audience using API with contextual attributes. We need to pass the campaign ID in our Audience API and, if contextual atributes are part of the message, then they will be passed in the payload like below.</summary>
<p>

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

</p>
