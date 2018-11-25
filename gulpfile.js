var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
//var antlr4 = require('gulp-antlr4');

//script paths
var jsFiles = 'bower_components/antlr4/runtime/JavaScript/src/antlr4/**/*.js',
    streamSaverFiles = 'bower_components/StreamSaver.js/**/*.js',
    cytoscapeFile = 'bower_components/cytoscape/dist/*.min.js',
    velvetFile = '../velvet/Velvet.js',
    velvetFiles = '../velvet/**/*.js',
    cssFile = '../velvet/css/velvet.css',
    atnFile = '../cytoscape-atn/layout.js',
    atnFiles = '../cytoscape-atn/**/*.js',
    jsDest = 'js',
    cssDest = 'css',
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

gulp.task('velvet-css-copy', function(done) {
    return gulp.src([cssFile, '../velvet/**/*.css'])
        .pipe(concat('velvet.css'))
        .pipe(gulp.dest(cssDest));
});

gulp.task('streamsaver-copy', function(done) {
    return gulp.src([streamSaverFiles])
        .pipe(concat('StreamSaver.js'))
        .pipe(gulp.dest(jsDest));
});

gulp.task('cytoscape-copy', function(done) {
    return gulp.src([cytoscapeFile])
        .pipe(gulp.dest(jsDest));
});

gulp.task('cytoscape-atn-copy', function(done) {
    return gulp.src([atnFile, atnFiles])
        .pipe(concat('cytoscape-atn.js'))
        .pipe(gulp.dest(jsDest));
});

gulp.task('jstree-copy', function(done) {
    return gulp.src(['bower_components/jstree/dist/**/*'])
        .pipe(gulp.dest(jsDest+'/jstree'));
});

gulp.task('jquery-copy', function(done) {
    return gulp.src(['bower_components/jquery/dist/**/*'])
        .pipe(gulp.dest(jsDest+'/jquery'));
});

gulp.task('jquery-ui-copy', function(done) {
    return gulp.src(['bower_components/jquery-ui/**/*'])
        .pipe(gulp.dest(jsDest+'/jquery-ui'));
});

gulp.task('solid-fs-copy', function(done) {
    return gulp.src(['../solid-fs/js/solid-fs.js'])
        .pipe(gulp.dest(jsDest));
});

gulp.task('default', gulp.series('set-java-env', gulp.series('antlr4-symlink', gulp.series('velvet-copy',
        gulp.series('velvet-css-copy', gulp.series('streamsaver-copy', gulp.series('cytoscape-copy', gulp.series('cytoscape-atn-copy', gulp.series(gulp.parallel('jstree-copy',gulp.parallel('jquery-copy',gulp.parallel('jquery-ui-copy','solid-fs-copy'))), (done) => {
  // place code for your default task here
  done();
})))))))));

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

