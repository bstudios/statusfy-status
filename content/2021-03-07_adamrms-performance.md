---
title: "Poor pageload performance"
description: "Pageload time is slower than usual for AdamRMS dashboard users"
date: 2021-03-07T10:00:00Z
severity: "degraded-performance"
affectedsystems:
  - "adamrms-dashboard"
resolved: true
---

::: update Resolved | 2021-03-097T16:00:00Z
This has been resolved by a migration to a new server platform. Migration has meant pageload times have dropped to around 12% of previous levels. For example loading a large asset list has dropped from 4.5s to 521 ms. 
:::


::: update Identified | 2021-03-07T10:00:00Z
Cause has been traced to increased latency on the interconnect between the production website servers and the database. We're working with the server suppliers to develop a fix. 
:::
