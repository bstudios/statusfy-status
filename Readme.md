# Bithell Studios Statusfy Status

> Powered by [Statusfy](https://github.com/bazzite/statusfy/)

Runs on github actions to generate a static site when markdown files in "content" are updated with new incidents, normally added through the github web interface

## Internal Documentation

### System Codes

- `adamrms-site`
- `adamrms-notifications`
- `adamrms-app`
- `adamrms-api`
- `beepos-login`
- `beepos-endofday`

### Severitys

- `under-maintenance` The system(s) cannot handle requests due to a temporary maintenance update.
- `major-outage` No one can access the system(s) because it is completely down.
- `partial-outage` Limited access to the system(s), because it's probably experiencing difficulties.
- `degraded-performance` The system(s) is not stable, it's working slow otherwise impacted in a minor way.

### Planned

- `scheduled` set to the start time of maintenance
- `duration` set to the duration in minutes

### Date format

ISO-8601 format please