---
title: Adobe Journey Optimizer developer reference
description: High-level references for Journey Optimizer REST endpoints and how to authenticate.
---

<Superhero slots="heading, text"/>

# Adobe Journey Optimizer developer reference

Journey Optimizer exposes REST endpoints that let you programmatically perform key operations in your applications.

<Resources slots="heading, links"/>

#### Resources

* [Journey Optimizer product description](https://helpx.adobe.com/legal/product-descriptions/adobe-journey-optimizer.html)
* [Understand the suppression list](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/configuration/monitor-reputation/manage-suppression-list)
* [Journeys integration with external system](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/connect-systems/external-systems/external-systems)
* [Work with content templates](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/content-management/content-templates/content-templates)
* [Work with content fragments](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/content-management/fragments/fragments)
* [Enable datasets for Orchestrated campaigns](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/campaigns/orchestrated-campaigns/data-configuration/schemas-datasets/manual-schema)

## Overview

The Adobe Journey Optimizer API allows you to deliver personalized, connected, and timely customer experiences across any app, device, or channel and in turn, effectively managing the end-to-end customer journey. The customer journey is the entire process of a customer's interactions with a brand, from the first moment of contact until the customer leaves. It starts with the awareness phase, where the customer learns about the brand and starts engaging. The customer will then further interact with the brand, visit online and physical sites, make purchases, send messages, or post reviews.

Adobe Journey Optimizer is built natively on the Adobe Experience Platform and combines a unified, real-time customer profile, an API-first open framework, centralized offer decisioning, and artificial intelligence (AI) and machine learning (ML) for personalization and optimization. By integrating with the Journey Optimizer API, brands can intelligently determine the next best interaction with scale, speed, and flexibility across the entire customer journey.

\<br/\>\<u\>Note\</u\>: The \<b\>Object Copy\</b\> API is now deprecated. To copy objects such as journeys, content templates, or fragments, across multiple sandboxes, use the \<b\>Sandbox tooling\</b\> feature detailed in [Journey Optimizer documentation](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/configuration/copy-objects-to-sandbox).

## Discover

<DiscoverBlock slots="heading, link, text"/>

[Set up authentication and credentials](references/authentication.md)

[Create and manage content templates and fragments](references/content.md)

[Manage suppression and allow lists](references/suppression.md)

### Journeys

[List and retrieve journeys](references/journeys-retrieve.md)

[Configure capping and throttling](references/journeys-throttling.md)

### Campaigns

[Retrieve and filter Action campaigns](references/campaigns-retrieve.md)

[Execute API-triggered campaigns](references/messaging.md)

[Preview campaigns and send proofs](references/simulations.md)

[Validate and enable Orchestrated campaign datasets](references/orchestrated-campaign-dataset.md)

[Trigger Orchestrated campaigns](references/oc-trigger.md)

### Code samples

[Execute API-triggered campaigns (code samples)](references/messaging-samples.md)

\<br/\>\<br/\>
