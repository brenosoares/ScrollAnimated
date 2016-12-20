var gulp = require('gulp'),
	clean = require('gulp-clean'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	concat = require('gulp-concat'),
	php = require('gulp-connect-php'),
	babel = require('gulp-babel'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload;

// CLEAN
gulp.task('clean', function () {
	return gulp.src('dist', {read: false})
	.pipe(clean());
});

// TASK SASS
gulp.task('sass', function () {
	return gulp.src('src/sass/**/*.sass')
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(autoprefixer())
	.pipe(concat('scrollAnimated.css'))
	.pipe(gulp.dest('dist/css/'));
});
gulp.task('sass:watch', function () {
	gulp.watch('src/sass/**/*.sass', ['sass']);
});

// BABEL
gulp.task('babel', function () {
    return gulp.src('src/js/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist/js/'));
});
// HTML TO DIST
gulp.task('html', function(){
	gulp.src('src/**/*.html')
	.pipe(gulp.dest('dist'));
});

// CONFIGS TASK THAT WILL RUN WITH RELOAD
gulp.task('js-watch', ['babel'], reload);
gulp.task('sass-watch', ['sass'], reload);
gulp.task('html-watch', ['html'], reload);

// CONNECT PHP
gulp.task('php', function() {
	php.server({ base: 'dist', port: 8010, keepalive: true});
});

// BROWSERSYNC
gulp.task('browser-sync',['php', 'html'], function() {
	browserSync({
		proxy: '127.0.0.1:8010',
		port: 8080,
		open: true,
		notify: false
	});
});

// SERVER LIVERELOAD
gulp.task('serve', ['browser-sync', 'default'], function () {
	gulp.watch("src/sass/**/*.sass",['sass-watch']);
	gulp.watch("src/**/*.js", ['js-watch']);
	gulp.watch("src/**/*.html", ['html-watch']);
});
gulp.task('default', ['babel', 'sass']);