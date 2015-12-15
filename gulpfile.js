/*
  load gulp
 */
var gulp = require('gulp');

/*
  creating plugin var objects automatically with gulp-load-plugins
  After running that code, the plugins object will contain your plugins,
  camel-casing their names
  (for example, gulp-ruby-sass would be loaded to plugins.rubySass).
 */
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();

/*
  Watch file changes and launch tasks after changes happen
*/
gulp.task('watch', function () {

  //try to limit to a smallest amount of files by declaring folders
  var otherFilesMaskArray = [
    '*.php',
    'inc/**/*.php',
    '_assets/css/style.css',
    '_assets/css/pages/**/*.css',
    '_assets/js/**/*.js'
  ];

  // init live reload and listen for changes
  plugins.livereload.listen();

  gulp.watch(otherFilesMaskArray).on('change', function(file) {
    plugins.livereload.changed(file.path);
  })
    .on('error', function (err) {
      $.util.log(err.message);
      this.emit('end');
    })
  ;

});

// Default Task
gulp.task('default', ['watch']);

function swallowError (error) {

  //If you want details of the error in the console
  console.log(error.toString());
  this.emit('end');
}


