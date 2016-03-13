module.exports.babel = {
    polyfill: true,
    ignore:   /\/node_modules\/(?!lib\/)/,
    "presets": [
      "es2015"
    ],
    "plugins": [
      "transform-decorators-legacy",
      "add-module-exports"
    ]
};
