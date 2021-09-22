var find = require("find");
const chalk = require("chalk");

//Total files
find.file(__dirname, function (files) {
  console.log(chalk.red("\nTotal files: " + files.length));
});

//All files names
find.file(__dirname, function (filesName) {
  filesName.forEach((element) => {
    console.log(chalk.green(element));
  });
});

//JavaScript files
find.file(/\.js$/, __dirname, function (JSfiles) {
  console.log(chalk.underline.bgBlue("\nJavaScript files: " + JSfiles.length));
});
