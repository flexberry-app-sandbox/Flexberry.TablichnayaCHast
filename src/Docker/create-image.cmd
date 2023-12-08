docker build --no-cache -f SQL\Dockerfile.PostgreSql -t tablichnayachast/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t tablichnayachast/app ../..
