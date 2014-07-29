var gulp = require('gulp');

var sass = require('gulp-ruby-sass');
var minifyCSS = require('gulp-minify-css');
var prefix = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync');
var cp = require('child_process');
var runSequence = require('run-sequence');
var changed = require('gulp-changed');
var deploy = require("gulp-gh-pages");

var paths = {
  sass: ['_sass/style.scss'],
  css: 'css',
  imagesSrc: ['_images/**/*'],
  imagesDest: 'img',
  jekyll: ['**/*.html', '**/*.md', '!_site/**/*.html']
}

gulp.task('sass', function() {
  browserSync.notify('<span style="color: grey">Running:</span> Sass compiling');
  return gulp.src(paths.sass)
    .pipe(sass({
      sourcemap: false,
      bundleExec: true,
      loadPath: [
        'bower_components/singularity/stylesheets',
        'bower_components/breakpoint-sass/stylesheets',
        'bower_components/sass-toolkit/stylesheets',
      ]
    }))
    .pipe(prefix("last 2 versions", "> 1%"))
    .pipe(minifyCSS())
    .pipe(gulp.dest(paths.css));
});

gulp.task('images', function() {
  return gulp.src(paths.imagesSrc)
    // Only grab the images that have changed.
    .pipe(changed(paths.imagesDest))
    // Optimize all the images.
    .pipe(imagemin({optimizationLevel: 5}))
    // Put them in the images directory.
    .pipe(gulp.dest(paths.imagesDest));
});

// Watch Files For Changes
gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.imagesSrc, function() {
    runSequence(['images'], ['jekyll-rebuild'])
  });
  gulp.watch(paths.jekyll, ['jekyll-rebuild']);
});


//////////////////////////////
// BrowserSync Task
//////////////////////////////
gulp.task('browserSync', function () {
  browserSync.init([
    '_site/' + paths.assets +  '/**/*.css',
    '_site/' + paths.assets + '/**/*.js',
    '_site/**/*.html',
  ], {
    server: {
      baseDir: '_site'
    },
    host: "localhost"
  });
});

// Our 'build' tasks for jekyll server.
gulp.task('jekyll-build', function (done) {
  return cp.spawn('bundle', ['exec', 'jekyll', 'build'], {stdio: 'inherit'})
    .on('close', done);
});

// Our 'dev' tasks for jekyll server, note: it builds the files, but uses extra configuration.
gulp.task('jekyll-dev', function (done) {
  browserSync.notify('<span style="color: grey">Running:</span> $ jekyll build');
  return cp.spawn('bundle', ['exec', 'jekyll', 'build', '--config=_config.yml,_config.dev.yml'], {stdio: 'inherit'})
    .on('close', done);
});

gulp.task('jekyll-rebuild', function() {
  return runSequence(['jekyll-dev'], function () {
      browserSync.reload();
  });
});


gulp.task('server', function(cb) {
  return runSequence(['images', 'sass'],
    'jekyll-dev',
    ['browserSync', 'watch'],
    cb
  );
});

gulp.task('serve', ['server']);

gulp.task('build', function(cb) {
  return runSequence(['sass', 'images'],
    'jekyll-build',
    cb
  );
});


gulp.task('deploy', function(cb) {
  return runSequence(
    'build',
    'gh-pages',
    cb
  );
});

gulp.task('gh-pages', function () {
  gulp.src("./_site/**/*")
    .pipe(deploy({

    }));
});
