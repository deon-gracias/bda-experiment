# Creation Steps

Create container

```bash
docker run --name search_engine -d -p 8983:8983 -t solr
```

```bash
docker exec -it --user solr search_engine bash
solr create_core -c search_engine
```

- http://localhost:8983/solr/search_engine/update
