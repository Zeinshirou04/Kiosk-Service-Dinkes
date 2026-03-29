# Use shinsenter/laravel as the base image
FROM shinsenter/laravel:php8.2

# Set working directory
WORKDIR /var/www/html

# Copy the application files
COPY . /var/www/html

# Copy the .env.example to .env
RUN cp .env.example .env

# Update and install necessary packages (including vim, nano, curl, and git)
RUN apt-get update && apt-get install -y vim nano curl git

RUN phpaddmod swoole xdebug zip yaml uuid sodium redis pdo_pgsql
# Install Node.js and npm (latest)
RUN curl -fsSL https://deb.nodesource.com/setup_current.x | bash - \
    && apt-get install -y nodejs

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN npm install

RUN npm run build

# Ensure the storage and bootstrap directories are writable

RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Set permissions for storage and cache directories
RUN chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

# Expose port 80
EXPOSE 80