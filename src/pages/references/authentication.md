---
title: Adobe Journey Optimizer APIs Authentication
description: A collection of high-level references for all endpoints provided by Adobe Journey Optimizer APIs.
---

# Adobe Journey Optimizer APIs Authentication


Adobe Journey Optimizer API access is set up through the steps below. Each of these steps is detailed in the [Adobe Developer documentation](https://developer.adobe.com/developer-console/docs/guides/services/).


<InlineAlert slots="text"/>

To manage certificates in Adobe Developer, make sure you have ***System administrator*** rights on the organization or a [developer account](https://helpx.adobe.com/enterprise/using/manage-developers.html) in the Admin Console.

1. **Check you have a digital certificate**, or create one if necessary. The public and private keys provided with the certificate are needed in the following steps.

2. **Create a new integration to Adobe Journey Optimizer Service** in Adobe Developer and configure it. Your credentials will then be generated (API Key, Client secret...).

![](ajoconsole.png)

3. **Create a JSON Web Token (JWT)** from the credentials previously generated and sign it with your private key. The JWT encodes all of the identity and security information that is needed by Adobe to verify your identity and grant you access to the API.

4. **Exchange your JWT for an Access Token** through a POST request. This Access Token will have to be used in each header of your API requests.

To establish a secure service-to-service Adobe Developer API session, every request to an Adobe service must include in the Authorization header the information below.

```json
-X GET https://cjm.adobe.io/imp/ \
-H 'Content-Type: application/json' \
-H 'Cache-Control: no-cache' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-H 'X-Api-Key: <API_KEY>' \
-H 'x-gw-ims-org-id: <IMS_ORG>'
```

**IMS_ORG**: This is your personal ORGANIZATION ID, one ORGANIZATION ID is provided by Adobe for each of your instances :

To obtain your ORGANIZATION ID value, refer to your administrator or your Adobe technical contact. You can also retrieve it into Adobe Developer when creating a new integration, in the licenses list.

**ACCESS_TOKEN**: Your personal access token, that was retrieved when exchanging your JSON Web Token through a POST request.

**API_KEY**: your personal API Key. It is provided in Adobe Developer after creating a new integration to Adobe Journey Optimizer Service.
