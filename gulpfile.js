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
    antlr4File = '../antlr4/runtime/JavaScript/src/antlr4/index.js',
    antlr4Files = '../antlr4/runtime/JavaScript/src/antlr4/**/*.js',
    cssFile = '../velvet/css/velvet.css',
    atnFile = '../cytoscape-atn/layout.js',
    atnFiles = '../cytoscape-atn/**/*.js',
    tmpDest = 'tmp',
    jsDest = 'js',
    cssDest = 'css',
    requireFile = './node_modules/@tarp/require/require.js',
    rootDest = ".",
    modDest = "./node_modules"

gulp.task('set-java-env', function(done) {
    process.env.JAVA_HOME='/home/roger/jdk1.8.0_05';
    done();
});

gulp.task('antlr4-symlink', function(done) {
    return gulp.src(['/home/roger/NodeProjects/antlr4_2/runtime/JavaScript/src/antlr4'])
        .pipe(gulp.symlink(modDest));
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

gulp.task('require-copy', function(done) {
    return gulp.src([requireFile])
        .pipe(gulp.dest(jsDest));
});

gulp.task('default', gulp.series('set-java-env', gulp.series('antlr4-symlink', gulp.series('velvet-copy',
        gulp.series('velvet-css-copy', gulp.series('cytoscape-copy', gulp.series('cytoscape-atn-copy', gulp.series(gulp.parallel('jstree-copy',gulp.parallel('jquery-copy',gulp.parallel('jquery-ui-copy',gulp.parallel('solid-fs-copy','require-copy')))), (done) => {
  // place code for your default task here
  done();
}))))))));

/*gulp.task('scripts', function(done) {
    return gulp.src(jsFiles)
        .pipe(concat('antlr4.js'))
        .pipe(gulp.dest(jsDest));
});

gulp.task('generate-scad-parser', function() {
    return gulp.src('bower_components/cam-io/grammars/antlr/SCADParser.g4')
        .pipe(antlr4('scad'));
});*/

