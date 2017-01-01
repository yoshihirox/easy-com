var gulp = require("gulp");
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var webserver = require('gulp-webserver');
var browserSync = require('browser-sync');
var electron = require('electron-connect').server.create();


gulp.task('start',function(){
    electron.start([".","dev","--disable-gpu"]);
    gulp.watch(['./public/css/*.css'],electron.reload);
    gulp.watch(['./public/*.html'],electron.reload);
    gulp.watch(['./public/js/*.js'],electron.reload);
    gulp.watch(['./main.js'],electron.restart);
    gulp.watch(['./build/bundle.js'], electron.reload);
});

gulp.task('browserify', function(){
  browserify('./src/app.jsx', {debug:true})
    .transform(babelify)
    .bundle()
    .on("error", function(err){ console.log("Error : "+ err.message);})
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./build/'))
});

gulp.task('watch', function(){
  gulp.watch(['./src/*.jsx','./jsx/*.jsx'], ['browserify']);
  gulp.watch('./public/*.html',['bs-reload']);
});

gulp.task('webserver', function(){
  gulp.src('./')
    .pipe(webserver({
      host: '127.0.0.1',
      livereload: true
      })
    );
});

gulp.task('browser-sync',function(){
    browserSync({
        server:{
            baseDir: "./public/"
            ,index : "index.html"
        }
    });
});

gulp.task('bs-reload', function(){
    browserSync.reload();
});



gulp.task('default', ['start','browserify', 'watch']);
