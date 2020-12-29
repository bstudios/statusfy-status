---
title: "AdamRMS unavailable"
description: "Due to an unplanned platform migration, AdamRMS was breifly unavailable"
date: 2020-12-29T13:03:00Z
severity: "major-outage"
affectedsystems:
  - "adamrms-dashboard"
  - "adamrms-api"
  - "adamrms-app"
  - "adamrms-notifications"
resolved: true
duration: 19
---

::: update Resolved | 2020-12-29T13:22:00Z
Service is back online and responding to requests, the alpha was promoted to the production service
:::

::: update Ongoing | 2020-12-29T13:03:00Z
Due to a configuration error with the service's SSL certificate at a CDN level, an attempt to setup a alpha build of the production service to test a new cloud platform provider is inadvertently causing requests to the main production server to fail. 
:::
