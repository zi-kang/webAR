//加载组件
var gulp = require('gulp'),
    connect = require('gulp-connect'),
    less = require('gulp-less'),
    cleanCss = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer');
    clean = require('gulp-clean'),
    fs = require('fs'),
    replace = require('gulp-replace'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel');

//开发
gulp.task('clean',function(){
    gulp.src('dev/*')
        .pipe(clean());
});

gulp.task('copyLibs',function(){
    gulp.src('src/libs/*')
        .pipe( gulp.dest('dev/libs/') )
});
gulp.task('copyJs',function(){
    gulp.src('src/js/*.js')
        .pipe(concat('main.js') )
        .pipe( gulp.dest('dev/js/') )
});
gulp.task('copyImg',function(){
    gulp.src('src/images/*')
        .pipe( gulp.dest('dev/images/') )
});

gulp.task('html',function(){
    gulp.src(['src/*.html'])
        .pipe( gulp.dest('dev/') )
});

gulp.task('less',function(){
    gulp.src(['src/less/*.less'])
        .pipe( less() )
        .pipe(autoprefixer({
            browsers: ['last 20 versions','last 2 Explorer versions','last 3 Safari versions','Firefox >= 20'],
            cascade: true
        }))
        .pipe(concat('index.css'))
        .pipe( gulp.dest('dev/css/'));
});





gulp.task('watch',function(){
    gulp.watch('src/less/*.less',['less']);
    gulp.watch('src/*.html',['html']);
    gulp.watch('src/js/*.js',['copyJs']);
    gulp.watch('src/images/*',['copyImg']);
});



//发布
gulp.task('publishCss',function(){
    gulp.src(['dev/css/*.css'])
        .pipe( cleanCss() )
        .pipe( gulp.dest('publish/css/'));
});
gulp.task('publishLibs',function(){
    gulp.src(['dev/libs/*'])
        .pipe( gulp.dest('publish/libs/'));
});
gulp.task('publishJs',function(){
    gulp.src(['dev/js/main.js'])
        .pipe( babel({
            presets: ['env']
        }))
        .pipe( uglify() )
        .pipe( gulp.dest('publish/js/'));
});

gulp.task('publishImg',function(){
    gulp.src(['dev/images/*'])
        .pipe( gulp.dest('publish/images/'));
});

gulp.task('publishHtml',function(){
    gulp.src(['dev/*.html'])
        .pipe( gulp.dest('publish/'));
});





gulp.task('localhost',function(){
    connect.server({
        root:'./',
        port:8000
    });

});

gulp.task('dev',['copyLibs','copyJs','copyImg','less','html']);
gulp.task('publish',['publishImg','publishCss','publishLibs','publishJs','publishImg','publishHtml']);
gulp.task('default',['localhost','watch']);