## SQUARE-KART
### Development Environment setup
With docker
```bash
$ docker-compose up
# Database dump restore
$ psql -h localhost -p 5432 -U test -W -d postgres < dump.sql #password test
```
- Local Frontend : [link](http://localhost:3000)
- Local Backend Api : [link](http://localhost:4000)

#### Note: Live link may not work as expected in chrome based browsers since chrome is not setting cookies and i didn't had money to put in on AWS from different domain (please use firefox version 90.0.2) or run in local environment with docker
