---
title: "AdamRMS database issue"
description: "AdamRMS exceeded server limits, so was taken down for a server upgrade"
date: 2020-08-31T12:25:00Z
severity: "major-outage"
affectedsystems:
  - "adamrms-dashboard"
  - "adamrms-api"
  - "adamrms-app"
  - "adamrms-notifications"
resolved: true

---

<!-- General content -->
AdamRMS exceeded server limits and crashed

<!--- language code: en -->

::: update Resolved | 2020-08-31T13:36:00Z
Monitoring suggests that fault has been resolved by the upgrade and shouldn't re-occur
:::


::: update Monitoring | 2020-08-31T13:32:00Z
Server upgrade has been completed - service is recovering
:::

::: update Ongoing | 2020-08-31T12:56:00Z
The primary backup has been completed and a server upgrade was triggered
:::

::: update Ongoing | 2020-08-31T12:43:00Z
A primary server backup has commenced, this is an extra backup on top of the existing daily database backups
:::

::: update Investigating | 2020-08-31T12:42:00Z
Downtime has been agreed with notifying client, and a backup has commenced
:::

::: update Investigating | 2020-08-31T12:30:00Z
Investigation has commenced
:::

::: update Notified | 2020-08-31T12:28:00Z
A client got in touch to report that the system had crashed when they'd attempted to add assets to a project
:::

::: update Notified | 2020-08-31T12:25:00Z
Automated monitoring was triggered when a routine MySQL upload test failed
:::
