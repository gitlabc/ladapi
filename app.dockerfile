FROM php:7.1-fpm

RUN curl -sL https://deb.nodesource.com/setup_6.x | bash - \
    && apt-get update && apt-get install -y \
    nodejs libmcrypt-dev mysql-client libmagickwand-dev git unzip --no-install-recommends \
    && pecl install imagick \
    && docker-php-ext-enable imagick \
    && docker-php-ext-install mcrypt pdo_mysql \
    && curl --silent --show-error https://getcomposer.org/installer | php \
    && mv /var/www/html/composer.phar /usr/local/bin/composer \
    && echo "alias phpunit='vendor/bin/phpunit --color=always'" >> ~/.bashrc