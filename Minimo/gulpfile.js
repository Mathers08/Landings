let project_folder = 'build';
let source_folder = 'src';

let path = {
  build: {
    html: project_folder + '/',
    css: project_folder + '/css/',
    js: project_folder + '/js/',
    img: project_folder + '/img/',
    fonts: project_folder + '/fonts/'
  },
  src: {
    html: [source_folder + '/*.html', '!' + source_folder + '/_*.html'],
    css: source_folder + '/scss/style.scss',
    js: source_folder + '/js/script.js',
    img: source_folder + '/img/**/*.+(png|jpg|jpeg|ico|svg|webp)',
    fonts: source_folder + '/fonts/*'
  },
  watch: {
    html: source_folder + '/**/*.html',
    css: source_folder + ['/scss/**/*.scss'],
    js: source_folder + '/js/**/*.js',
    img: source_folder + '/img/**/*.+(png|jpg|jpeg|ico|svg|webp)'
  },
  clean: './' + project_folder + '/'
}

let {src, dest} = require('gulp'),
  gulp = require('gulp'),
  browser_sync = require('browser-sync').create(),
  file_include = require('gulp-file-include'),
  del = require('del'),
  scss = require('gulp-sass')(require('sass')),
  autoprefixer = require('gulp-autoprefixer'),
  group_media = require('gulp-group-css-media-queries'),
  clean_css = require('gulp-clean-css'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify-es').default,
  imagemin = require('gulp-imagemin');

// Browser Sync
const browserSync = (params) => {
  browser_sync.init({
    server: {
      baseDir: './' + project_folder + '/'
    },
    port: 4040,
    notify: false
  })
}

// HTML
const html = () => {
  return src(path.src.html)
    .pipe(file_include())
    .pipe(dest(path.build.html))
    .pipe(browser_sync.reload({stream: true}))
}

// Images Compress
const img = () => {
  return src(path.src.img)
    .pipe(imagemin(
      [
        imagemin.gifsicle({interlaced: true}),
        imagemin.mozjpeg({quality: 75, progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({
          plugins: [
            {removeViewBox: true},
            {cleanupIDs: false},
          ]
        }),
      ]
    ))
    .pipe(dest(path.build.img))
}

// JavaScript
const js = () => {
  return src(path.src.js)
    .pipe(file_include())
    .pipe(dest(path.build.js))
    .pipe(uglify())
    .pipe(
      rename({
        extname: '.min.js'
      })
    )
    .pipe(dest(path.build.js))
    .pipe(browser_sync.stream())
}

// CSS
const css = () => {
  return src(path.src.css)
    .pipe(
      scss({
        outputStyle: 'expanded'
      })
    )
    .pipe(group_media())
    .pipe(
      autoprefixer({
        cascade: true,
        overrideBrowserslist: ['last 5 versions']
      })
    )
    .pipe(dest(path.build.css))
    .pipe(clean_css())
    .pipe(
      rename({
        extname: '.min.css'
      })
    )
    .pipe(dest(path.build.css))
    .pipe(browser_sync.stream())
}

// Watch Files
const watchFiles = (params) => {
  gulp.watch([path.watch.html], html)
  gulp.watch([path.watch.css], css)
  gulp.watch([path.watch.js], js)
  gulp.watch([path.watch.img], img)
}

// Clean
const clean = (params) => {
  return del(path.clean);
}

let build = gulp.series(clean, gulp.parallel(html, js, css, img));
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.img = img;
exports.js = js;
exports.html = html;
exports.css = css;
exports.build = build;
exports.watch = watch;
exports.default = watch;