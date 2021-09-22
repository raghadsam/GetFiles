var find = require("find");

//Total files
find.file(__dirname, function (files) {
  console.log("\nTotal files: " + files.length);
});

//All files names
find.file(__dirname, function (filesName) {
  filesName.forEach((element) => {
    console.log(element);
  });
});

//JavaScript files
find.file(/\.js$/, __dirname, function (JSfiles) {
  console.log("\nJavaScript files: " + JSfiles.length);
});
