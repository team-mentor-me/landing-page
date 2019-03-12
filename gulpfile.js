var gulp = require('gulp')

// # Server
var nodemon = require('gulp-nodemon')
//var jshint = require('gulp-jshint')
var browserSync = require('browser-sync');
var reload = browserSync.reload;

//# JS
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')
var plumber = require('gulp-plumber')
var sourcemaps = require('gulp-sourcemaps')

// LESS
var less = require('gulp-less')

//  JAVASCRIPT
// =================================
gulp.task('js:build', function(){
    return gulp.src(['ng/module.js', 'ng/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(ngAnnotate())
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('assets'))
})

gulp.task('js:watch', ['js:build'], function(){
    gulp.watch('ng/**/*.js', ['js:build'])
})


// LESS
// =================================
gulp.task('css:build', function () {
	return gulp.src(`./src/less/styles.less`)
	.pipe(less({
		paths: [ './', './overrides/']
	}))
	.pipe(gulp.dest(`./docs/css`));
});

gulp.task('css:watch', ['css:build'], function(){
    gulp.watch(`src/**/*.less`, ['css:build'])
})

gulp.task('dev:server', ['nodemon'], function() {
    browserSync({
        proxy: "localhost:7000",  // local node app address
        port: 5000,  // use *different* port than above
        files: ["docs/**/*.*"],
        browser: "google chrome",
        notify: true
    });
});

gulp.task('nodemon', function (cb) {
    var called = false;
    return nodemon(
        {
            script: 'server.js',
            ignore: [ 'gulp*'],
            ext: 'js html ejs',
            watch: ['server.js', 'src/**/*.*']
        }
    ).on('start', function () {
            if (!called) {
                called = true;
                cb();
            }
        }).on('restart', function () {
            console.log('nodemon restarted')
            setTimeout(function () {
             reload({stream: true});
            }, 50);
        })
})


gulp.task('build', ['js:build', 'css:build'])
gulp.task('watch', ['js:watch', 'css:watch'])
gulp.task('dev', ['css:watch',  'dev:server'], function(){
		gulp.watch('docs/**/*.*', reload)
		gulp.watch('src/**/*.*', reload)
	})

// HEROKU
// ============================
/*gulp.task('heroku:production', function(){
 //runSeq('clean', 'build', 'minify')
 runSeq(build)
 })*/

