var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
//var antlr4 = require('gulp-antlr4');

//script paths
var jsFiles = 'bower_components/antlr4/runtime/JavaScript/src/antlr4/**/*.js',
    velvetFile = '../velvet/Velvet.js',
    velvetFiles = '../velvet/**/*.js',
    jsDest = 'js',
    requireFile = 'bower_components/antlr4/runtime/JavaScript/src/lib/require.js',
    requireDest = '.';

gulp.task('set-java-env', function(done) {
    process.env.JAVA_HOME='/home/roger/jdk1.8.0_05';
    done();
});

gulp.task('antlr4-symlink', function(done) {
    return gulp.src(['bower_components/antlr4/runtime/JavaScript/src/antlr4'])
        .pipe(gulp.symlink(requireDest));
});

gulp.task('velvet-copy', function(done) {
    return gulp.src([velvetFile, velvetFiles])
        .pipe(concat('velvet.js'))
        .pipe(gulp.dest(jsDest));
});

gulp.task('default', gulp.series('set-java-env', gulp.series('antlr4-symlink', gulp.series('velvet-copy', function(done) {
  // place code for your default task here
  done();
}))));

/*gulp.task('scripts', function(done) {
    return gulp.src(jsFiles)
        .pipe(concat('antlr4.js'))
        .pipe(gulp.dest(jsDest));
});

gulp.task('require', function(done) {
    return gulp.src(requireFile)
        .pipe(gulp.dest(requireDest));
});

gulp.task('generate-scad-parser', function() {
    return gulp.src('bower_components/cam-io/grammars/antlr/SCADParser.g4')
        .pipe(antlr4('scad'));
});*/

