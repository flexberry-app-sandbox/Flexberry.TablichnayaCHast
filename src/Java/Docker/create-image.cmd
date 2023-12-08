docker build --no-cache -f SQL\Dockerfile.PostgreSql -t tablichnayachast-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t tablichnayachast-java/app ../../..
