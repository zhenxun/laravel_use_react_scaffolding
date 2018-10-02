let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.copy('node_modules/bootstrap3/dist/css/bootstrap.css', 'public/css/bootstrap3/bootstrap.css');
// mix.copy('node_modules/bootstrap3/dist/css/bootstrap-theme.css', 'public/css/bootstrap3/bootstrap-theme.css');

// mix.styles([
//     'public/css/bootstrap3/*'
// ], 'public/css');

mix.react('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .copy('node_modules/bootstrap3/dist/css/bootstrap.css', 'public/css/bootstrap3/bootstrap.css')
   .copy('node_modules/bootstrap3/dist/css/bootstrap-theme.css', 'public/css/bootstrap3/bootstrap-theme.css')
   .copy('node_modules/bootstrap3/dist/fonts/*', 'public/fonts')
   .copy('node_modules/datatables.net-bs/css/dataTables.bootstrap.css', 'public/css/datatable-bs/dataTables.bootstrap.css')
   .copy('node_modules/datatables.net-buttons-bs/css/buttons.bootstrap.css', 'public/css/datatable-bs/buttons.bootstrap.css');

mix.combine([
    'public/css/bootstrap3/*',
    'public/css/datatable-bs/dataTables.bootstrap.css',
    'public/css/datatable-bs/buttons.bootstrap.css',
], 'public/css/app.css');