# Laravel Nuxt

## Getting Started
### Software you will need
* Local mysql database
* Composer and php 7.1
* Node and npm 

### How to run development server
* `npm install`
* `npm run dev` for client side
* `composer install` 
* Copy .env-example to .env and enter in your details. 
* `php artisan jwt:secret`
* `php artisan serve` server side

## How to deploy the app
* Make sure dev server is not running
* `npm run build:prod`
* Move the generated files in dist to public folder in Laravel app
  * Delete `.nojekyll` file since it hinders the copying
  * Click replace all
* Go back to root directory
* `./deploy.sh`
* Go to heroku dashboard and deploy prod branch

## Features
* Ready to go
* Vuetify
* Responsive design
* File uploading
* OAuth with Facebook

## Things that you may need to configure manually
* The Laravel dev server is on localhost:8000
* In production you are hosting the static files in the Laravel public folder
* There is a post install script to force migrations this is mainly for heroku deployments you should remove this if you don't need it

## Deploying app
* `npm run build`
* Move stuff generated in client/dist to public folder in root directory
* git commit all changes
* `heroku create <yourappname>`
* `heroku addons:create jawsdb:kitefin`
* Make sure to at least add the following env variables to heroku
  * DB variables
  * APP_KEY
  * JWT_SECRET
  * Tip: the dburl is like this: mysql://<DB_USERNAME>:<DB_PASSWORD>@<DB_HOST>:<DB_PORT>/<DB_DATABASE>
  * LOG_CHANNEL=errorlog this will errors in heroku logs
* `git push heroku master`

## How to separate nuxt app and laravel app
* Remove the srcDir field in nuxt config
* Copy the .gitignore .editorconfig .jsbeautifyrc package.json into the nuxt project folder
* Change this line `const pkg = require('../package')` in nuxt config to where package.json is located in new repo probably `./package`