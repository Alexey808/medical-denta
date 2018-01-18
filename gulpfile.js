'use strict';

 // Подключаемые библиотеки
var gulp          = require('gulp');
var sass          = require('gulp-sass');
var concat        = require('gulp-concat');
var cleanCSS      = require('gulp-clean-css');
var autoprefixer  = require('gulp-autoprefixer');
var sourceMaps    = require('gulp-sourcemaps');
var clean         = require('gulp-clean');
var browserSync   = require('browser-sync');
var uglify        = require('gulp-uglify');
var rigger        = require('gulp-rigger');


//Дефолтный таск ---------------------------------------------------+
gulp.task('default', ['build', 'server', 'watch']);

// Сервер ----------------------------------------------------------+
var config = {
    server: {
        baseDir: "./build"
    },
    host: 'localhost',
    port: 9000,
};
gulp.task('server', ()=> {
    browserSync(config);
});

// PATH ------------------------------------------------------------+
var path = {
    build: {
        html: 'build/',
        css: 'build/css/',
        js: 'build/js/',
        img: 'build/img/'
    },
    src: {
        html: 'src/**/*.html', 
        style: 'src/sass/*.scss',
        js: 'src/js/index.js',
        img: 'src/img/**/*.*'
    },
    watch: {
        html: 'src/*.html',
        style: 'src/sass/**/*.scss',
        js: 'src/js/index.js',
        img: 'src/img/**/*.*'
    },
    clean: './build/*'
};

// Сборка тасков build ---------------------------------------------+
gulp.task('build', [
    // 'clean:build',
    'html:build',
    'style:build',
    'js:build',
    'image:build'
]);

//Чистка -----------------------------------------------------------+
gulp.task('clean:build', ()=> {
    gulp.src(path.clean, {read: false})
        .pipe(clean());
});

// Отслеживание изменений ------------------------------------------+
gulp.task('watch', ()=> {
    gulp.watch([path.watch.html], () => {
        gulp.start('html:build');
    });
    gulp.watch([path.watch.style], () => {
        gulp.start('style:build');
    });
    gulp.watch([path.watch.html], () => {
        gulp.start('js:build');
    });
    gulp.watch([path.watch.style], () => {
        gulp.start('image:build');
    });
});

// Сборка html -----------------------------------------------------+
gulp.task('html:build', ()=> {
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html)) 
        .pipe(browserSync.reload({stream: true})); 
});

// Сборка css ------------------------------------------------------+
gulp.task('style:build', ()=> {
    gulp.src(path.src.style)
        .pipe(sourceMaps.init())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(autoprefixer({browsers: ['last 9 versions'], cascade: false}))
        .pipe(cleanCSS())
        .pipe(sourceMaps.write())
        .pipe(gulp.dest(path.build.css))
        .pipe(browserSync.reload({stream: true})); 
});

// Сборка js -------------------------------------------------------+
gulp.task('js:build', ()=> {
    gulp.src(path.src.js)
        .pipe(rigger())
        .pipe(uglify())
        .pipe(concat('main.js'))
        .pipe(gulp.dest(path.build.js))
        .pipe(browserSync.reload({stream: true})); 
});

// Сборка изображений ----------------------------------------------+
gulp.task('image:build', ()=> {
    gulp.src(path.src.img)
        .pipe(gulp.dest(path.build.img));
        /*не успеваем собрать все картинки до reload. надо почитать*/
        //.pipe(browserSync.reload({stream: true})); 
});

