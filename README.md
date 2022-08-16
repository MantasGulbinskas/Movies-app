# Movies-app

## Technologies

Laravel
ReactJs
Sass
Tailwindcss
Bootstrap


## install

```sh
git clone https://github.com/MantasGu/Movies-app.git
cd movies-app
composer install
./vendor/bin/sail up -d
./vendor/bin/sail shell
php artisan migrate
php artisan db:seed MoviesSeeder
npm install
npm run dev
```