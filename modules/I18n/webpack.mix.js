const dotenvExpand = require('dotenv-expand');
dotenvExpand(require('dotenv').config({ path: '../../.env'/*, debug: true*/}));

const mix = require('laravel-mix');
require('laravel-mix-merge-manifest');

mix.setPublicPath('../../public').mergeManifest();

mix.js(__dirname + '/Resources/assets/js/app.js', 'js/i18n.js')
    .sass( __dirname + '/Resources/assets/sass/app.scss', 'css/i18n.css');

if (mix.inProduction()) {
    mix.version();
}
