let mix = require("laravel-mix");

mix.js("src/js/main.js", "build/app.js").setPublicPath("build");
mix.css("src/css/main.css", "build/app.css").setPublicPath("build");
