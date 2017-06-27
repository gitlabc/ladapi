FROM php:7.1-fpm

RUN apt-get update && apt-get install -y \
    libmcrypt-dev curl mysql-client libmagickwand-dev git unzip --no-install-recommends \
    && pecl install imagick \
    && docker-php-ext-enable imagick \
    && docker-php-ext-install mcrypt pdo_mysql \
    && curl --silent --show-error https://getcomposer.org/installer | php \
    && mv /var/www/html/composer.phar /usr/local/bin/composer