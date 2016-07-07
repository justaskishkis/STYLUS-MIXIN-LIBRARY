/**
 * Build
 * DO NOT edit below unless you know what you are doing!
 */

process.env.DISABLE_NOTIFIER = true;

var elixir = require('laravel-elixir');

require('laravel-elixir-stylus');

var gulp = require('gulp');

/**
 * Run Laravel Elixir
 */

elixir(function (mix) {

    // Compile stylus
    mix.stylus(
        'app.styl',
        './public/css/app.css'
    );

});