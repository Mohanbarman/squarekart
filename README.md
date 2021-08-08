## SQUARE-KART
### Development Environment setup
With docker
```bash
$ docker-compose up
# Database dump restore
$ psql -h localhost -p 5432 -U test -W -d postgres < dump.sql #password test
```
#### Note: Live link may not work as expected in chrome based browsers since chrome is not setting cookies from different domain (please use firefox) or run in local environment with docker
