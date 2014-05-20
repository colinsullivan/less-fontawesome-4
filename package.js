Package.describe({
  summary: 'Less version of Fontawesome 4 for Meteor.js'
});

Package.on_use(function (api) {
  api.use("less", "client");

  api.add_files([
    "./lib/fonts/FontAwesome.otf",
    "./lib/fonts/fontawesome-webfont.woff",
    "./lib/fonts/fontawesome-webfont.ttf",
    "./lib/fonts/fontawesome-webfont.svg",
    "./lib/fonts/fontawesome-webfont.eot"
  ], "client");
});


