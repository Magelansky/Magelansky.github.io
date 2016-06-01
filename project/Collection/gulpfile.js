var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var csso = require('gulp-csso');
var uncss = require('gulp-uncss');
var autoprefixer = require('gulp-autoprefixer');
var rename = require("gulp-rename");



// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
                server: {
                        baseDir: "./"
                },
                notify: false
        });

    gulp.watch("scss/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('sass', function() {
    return gulp.src("scss/*.scss")
        .pipe(sass())
        .pipe(sass().on('error', sass.logError))  
        .pipe(autoprefixer())
        .pipe(uncss({
            html: ['index.html']
        }))
        .pipe(csso())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);