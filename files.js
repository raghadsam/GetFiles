var find = require("find");

find.file(__dirname, function (files) {
  console.log("Total files: " + files.length);
});

find.file(/\.js$/, __dirname, function (JSfiles) {
  console.log("JavaScript files: " + JSfiles.length);
});
