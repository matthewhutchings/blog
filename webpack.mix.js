let mix = require('laravel-mix');
let build = require('./cleaver.build.js');
let command = require('node-cmd');
let path = require('path');

mix.disableNotifications()
    .webpackConfig({
        plugins: [
            build.cleaver
        ],
        devServer: {
            contentBase: path.join(__dirname, 'dist')
        }
    })
    .setPublicPath('./')
    .js('resources/assets/js/app.js', 'dist/assets/js')
    .postCss('resources/assets/css/app.css', 'dist/assets/css', [
        require('tailwindcss')
    ])
    .options({
        processCssUrls: false
    })
    .version();

    mix.browserSync({
        files: [
            "dist/**/*",
            {
                match: ["resources/**/*"],
                fn: function(event, file) {
                    command.run('php cleaver build', (error, stdout, stderr) => {
                        console.log(error ? stderr : stdout);
                    });
                }
            }
        ],
        proxy: '127.0.0.1:8080',
        notify: false,
        open: false
    });