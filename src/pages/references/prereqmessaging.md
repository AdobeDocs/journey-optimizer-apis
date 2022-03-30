---
title: Adobe Journey Optimizer APIs Authentication
description: A collection of high-level references for all endpoints provided by Adobe Journey Optimizer APIs.
---

# Adobe Journey Optimizer Messaging Steps

Before using the Messaging API, users should go to Journey Optimizer User Interface to create a campaign.

Follow these steps to prepare the AJO Messaging API:

1. Create Message Preset under Administration → Channels → Branding → Message Presets
2. Create a Campaign
3. During the campaign creation, Actions: Email (Current version of API supports email only)
4. Select Category as Transactional (Current version of API supports Transactional category only)
5. Audience: Select All users (Current version of API supports "All Users" only)
6. Schedule: Select "When activated manually"  (Current version of API supports this option only)
7. Go to content and create message content
8. Click Activate
9. Click on Campaign once activated and copy the Campaign ID from URL; this ID will be required for API