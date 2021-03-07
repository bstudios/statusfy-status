---
title: "Poor pageload performance"
description: "Pageload time is slower than usual for AdamRMS dashboard users"
date: 2021-03-07T10:00:00Z
severity: "degraded-performance"
affectedsystems:
  - "adamrms-dashboard"
resolved: false
---

::: update Identified | 2021-03-07T10:00:00Z
Cause has been traced to increased latency on the interconnect between the production website servers and the database. We're working with the server suppliers to develop a fix. 
:::
