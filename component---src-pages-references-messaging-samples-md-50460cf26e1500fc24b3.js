"use strict";(self.webpackChunkjourney_optimizer_apis=self.webpackChunkjourney_optimizer_apis||[]).push([[620],{54962:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return m},default:function(){return l}});var t=a(87462),o=a(63366),s=(a(15007),a(64983)),r=a(91515),i=["components"],m={},d={_frontmatter:m},p=r.Z;function l(e){var n=e.components,a=(0,o.Z)(e,i);return(0,s.mdx)(p,(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"interactive-message-execution-code-examples"},"Interactive Message Execution code examples"),(0,s.mdx)("p",null,"Below code snippets are using a sample Journey Optimizer API-triggered Campaign.\nFor each of these examples to run. You first have to create your API Triggred Campaigns in UI and get ready with your Bearer token and API key. "),(0,s.mdx)("p",null,"Note that these examples are written in curl but we support the language of your choice."),(0,s.mdx)("p",null,"A detailed description of the API is available ",(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/journey-optimizer-apis/references/messaging/"},"here")),(0,s.mdx)("summary",null,"Example 1 : This Example is to show how you can send an SMS Message to an existing profile in AEP having phoneNumber defined."),(0,s.mdx)("p",null,(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "requestId": "3126743632163793",\n  "campaignId": "10e2583b-4d1d-4b57-bd6e-fdc79405d67d",\n  "recipients": [\n    {\n      "type": "aep",\n      "namespace": "phone",\n      "userId": "1234567890"\n    }\n  ]\n}\n'))),(0,s.mdx)("summary",null,"Example 2 : This Example is to show how you can send an SMS Message with contextual attributes to multiple existing profiles and overriding the phoneNumber using channelData."),(0,s.mdx)("p",null,(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "requestId": "3126743632163793",\n  "campaignId": "10e2583b-4d1d-4b57-bd6e-fdc79405d67d",\n  "recipients": [\n    {\n      "type": "aep",\n      "namespace": "phone",\n      "userId": "test@gmail.com",\n      "channelData": {\n        "mobilePhoneNumber": "1234567890"\n      },\n      "context": {\n        "product" : {\n          "name" : "Jackets",\n          "category": "Clothes"\n        },\n        "offerCode": "THANKSGIVING"\n      }\n    },\n    {\n      "type": "aep",\n      "namespace": "phone",\n      "userId": "test1@gmail.com",\n      "channelData": {\n        "mobilePhoneNumber": "0921234567"\n      },\n      "context": {\n        "product" : {\n          "name" : "Jackets",\n          "category": "Clothes"\n        },\n        "offerCode": "THANKSGIVING"\n      }\n    }\n  ]\n}\n'))),(0,s.mdx)("summary",null,"Example 3 : This Example is to show how you can send a Push Message to an existing profile. You have to get ready with your Push meessaging. information "),(0,s.mdx)("p",null,(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "requestId": "3126743632163793",\n  "campaignId": "10e2583b-4d1d-4b57-bd6e-fdc79405d67d",\n  "recipients": [\n    {\n      "type": "aep",\n      "namespace": "ecid",\n      "userId": "12345678901234567890123456789493505531",\n      /* User needs to configure push identity prior to execution. */\n      "channelData": {\n        "pushInfo": {\n          "appID": "#appId#",\n          "platform": "#platform#",\n          "token": "#token#"\n        }\n      }\n    }\n  ]\n}\n'))),(0,s.mdx)("summary",null,"Example 4: This Example is to show how to send an Email Message to an existing profile with contextual attributes (defined during campaign authooring) and personalization attributes. "),(0,s.mdx)("p",null,(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "requestId": "3126743632163793",\n  "campaignId": "10e2583b-4d1d-4b57-bd6e-fdc79405d67d",\n  "recipients": [\n    {\n      "type": "aep",\n      "namespace": "email",\n      "userId": "test@gmail.com",\n      "context": {\n        "product" : {\n          "name" : "Jackets",\n          "category": "Clothes"\n        },\n        "offerCode": "THANKSGIVING"\n      },\n      "profile": {\n        "person":{\n          "name": {\n            "firstName": "John",\n            "lastName": "Chao",\n            "courtesyTitle": "Mr."\n          },\n          "mobilePhone": {\n            "number": "111-112-3456",\n            "primary": true\n          },\n          "personalEmail": {\n            "address": "ajo_im@gmail.com",\n            "primary": true\n          }\n        }\n      }\n    }\n  ]\n}\n'))),(0,s.mdx)("summary",null,"Example 5: This Example is to show how to send an Email Message to an existing profile with contextual and personalization attributes and overriding email-Id using channelData. "),(0,s.mdx)("p",null,(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "requestId": "3126743632163793",\n  "campaignId": "10e2583b-4d1d-4b57-bd6e-fdc79405d67d",\n  "recipients": [\n    {\n      "type": "aep",\n      "namespace": "email",\n      "userId": "test@gmail.com",\n      "channelData": {\n        "emailAddress": "test123@gmail.com"\n      },\n      "context": {\n        "product" : {\n          "name" : "Jackets",\n          "category": "Clothes"\n        },\n        "offerCode": "THANKSGIVING"\n      },\n      "profile": {\n        "person":{\n          "name": {\n            "firstName": "John",\n            "lastName": "Chao",\n            "courtesyTitle": "Mr."\n          },\n          "mobilePhone": {\n            "number": "111-112-3456",\n            "primary": true\n          },\n          "personalEmail": {\n            "address": "ajo_im@gmail.com",\n            "primary": true\n          }\n        }\n      }\n    }\n  ]\n}\n'))))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-references-messaging-samples-md-50460cf26e1500fc24b3.js.map