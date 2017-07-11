cd /var/www/public
ln -fs ../ladclient/build/static/ ./static
ln -fs ../ladclient/build/service-worker.js ./service-worker.js
cd /var/www/resources/views/
ln -fs ../../ladclient/build/index.html ./index.blade.php
cd /var/www
composer install
php artisan migrate:refresh
php artisan db:seed
php-fpm