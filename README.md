## SQUARE-KART

### Development Environment setup

With docker

```bash
$ docker-compose up -d
# Database dump restore
$ psql -h localhost -p 5432 -U test -W -d postgres < dump.sql #password test
```

- Local Frontend : [http://localhost:3000](http://localhost:3000)
- Local Backend Api : [http://localhost:4000](http://localhost:4000)
