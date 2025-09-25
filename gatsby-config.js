/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = {
  siteMetadata: {
    // versions: [
    //   {
    //     title: 'v2.0',
    //     selected: true
    //   },
    //   {
    //     title: 'v1.4',
    //     path: 'https://github.com/AdobeDocs/analytics-1.4-apis'
    //   }
    // ],
    pages: [
      {
        title: 'Adobe Journey Optimizer APIs',
        path: '/'
      },
      {
        title: 'API References',
        menu: [
        {  
          title: 'Authentication',
          description: '',
          path: '/references/authentication.md'
        },
        {
          title: 'Suppression API',
          description: '',
          path: '/references/suppression.md'
        },
        {
          title: 'Trigger campaigns',
          path: '/references/messaging.md',
        },
        {
          title: 'Retrieve Journeys',
          path: '/references/journeys-retrieve.md'
        },
          title: 'Retrieve Action Campaigns',
          path: '/references/campaigns-retrieve.md'
        },
        {
          title: 'Journeys throttling configurations',
          path: '/references/journeys-throttling.md'
        },
        {
          title: 'Content fragments & templates',
          path: '/references/content.md'
        },
        {
          title: 'Simulations API',
          path: '/references/simulations.md'
        },
        {
          title: 'Enable datasets for Orchestrated campaigns',
          path: '/references/orchestrated-campaign-dataset.md'
        }
      ]
      },
      {
        title: 'Code samples',
        menu: [
          {
            title: 'Trigger campaigns using APIs',
            path: 'references/messaging-samples.md'
          }
      ]
      }
    ]
  },
  plugins: [`@adobe/gatsby-theme-aio`],
  pathPrefix: process.env.PATH_PREFIX || '/journey-optimizer-apis/'
};