var gulp = require('gulp');
var jslint = require('gulp-jslint');
var uglify = require('gulp-uglify');
gulp.task('minify', function() {
   gulp.src('./src/*.js')
   .pipe(uglify())
   .pipe(gulp.dest('dist'))

});
gulp.task('jslint' , function() {
    return gulp.src(['./src/*.js'])
           .pipe(jslint({
                  browser: true,
                  todo: true,
                  devel: true,
                  white: true,
                  reporter: 'default',
                  errorsOnly: false
                }))
           .on('error', function(error){
                console.error(String(error));
             });

});
gulp.task('war', ['html', 'fonts', 'copyfonts', 'other'], function () {
    gulp.src([
        path.join(conf.paths.dist, '/**')
    ])
        .pipe($.war({
            welcome: 'index.html',
            displayName: 'My Project',
        }))
        .pipe($.zip('myProject.war'))
        .pipe(gulp.dest(path.join(conf.paths.tmp, '/')));
});
gulp.task('default',['war','minify','jslint'], function(){

});
