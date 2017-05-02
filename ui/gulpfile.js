var gulp = require('gulp');
var minify = require('gulp-minify');
var concat = require('gulp-concat');
var mainBowerFiles = require('main-bower-files');

gulp.task('default', function() {
  console.log("USE comand: gulp vendor");
});

gulp.task('vendor', function(){
    console.log("Compress JS Vedor");
    gulp
        .src(mainBowerFiles(['**/*.js']))
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest("public_html/"));

    console.log("Compress CSS Vedor");
    gulp
        .src(mainBowerFiles(['**/*.css']))
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest("public_html/"));
});

gulp.task('future', function(){
  console.log("Compress JS in App");
  gulp
      .src(['src/app/**/*.module.js', 'src/app/**/*.filter.js', 'src/app/**/*.constant.js', 'src/app/**/*.route.js', 'src/app/**/*.service.js', 'src/app/**/*.controller.js'])
      .pipe(concat('app.js'))
      .pipe(gulp.dest('public_html/'));

  console.log("Compress JS in App jquery");
  gulp
      .src(['src/app/jquery/function/**/*.js', 'src/app/jquery/modules/**/*.js', 'src/app/jquery/pages/**/*.js', 'src/app/jquery/*.js'])
      .pipe(concat('app-jquery.js'))
      .pipe(gulp.dest('public_html/'));

  console.log("CSS");
  gulp
      .src('src/app/**/*.css')
      .pipe(concat('app.css'))
      .pipe(gulp.dest('public_html/'));

  console.log("HTML");
  gulp
      .src('src/**/*.html')
      .pipe(gulp.dest('public_html/'));
});
