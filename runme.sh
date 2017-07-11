#! /bin/sh
docker-compose up

# api - php
docker-compose exec api composer install
docker-compose exec api php artisan migrate:refresh
docker-compose exec api php artisan db:seed
