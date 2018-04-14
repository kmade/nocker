module.exports = function plugins(webpack) {
 return [
      require("postcss-pseudoelements")(),
      //require("postcss-import")({addDependencyTo: webpack}),
      //require("postcss-url")(),
      require("postcss-cssnext")({
          browsers: [
              "Android 2.3",
              "Android >= 4",
              "Chrome >= 35",
              "Firefox >= 31",
              "Explorer >= 11",
              "iOS >= 7",
              "Opera >= 12",
              "Safari >= 7.1"
          ]
      }),
      // require("postcss-opacity")(),
      // require("postcss-vmin")(),
      // require("postcss-will-change")(),
      // require("postcss-flexbugs-fixes")(),
      // require("postcss-gradientfixer")(),
      // require("postcss-browser-reporter")(),
      // require("postcss-reporter")(),
  ];
}
