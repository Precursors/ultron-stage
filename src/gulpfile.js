'use strict'

/**
 * 这里是react相关的gulp task
 * rule:
 *   1. build   执行编译、压缩、上传并删除public文件夹
 *   2. watch   执行编译并监听文件变化
 *   3. default 执行编译
 */

var gulp = require('gulp')
var del = require('del') // 删除img文件夹所用
var sass = require('gulp-sass') // 添加转换 sass -> css
var named = require('vinyl-named')
var webpack = require('gulp-webpack')
var vinylPaths = require('vinyl-paths')
var config = require('./webpack.config.js')
var runSequence = require('gulp-run-sequence')
var autoprefixer = require('gulp-autoprefixer')

const jsFilePath = [`./js/index.js`]
const tplFilePath = [`./tpl/*.html`]
const cssFilePath = ['./components/**/*.scss']

const watchPath = [`./js/*.js`, `./tpl/*.html`, './components/index.js', './components/*/*.jsx', './components/*/*.scss']

const jsOutput = '../public'
const cssOutput = './components/'
const tplOutput = '../views'

gulp.task('build-js', () =>
  gulp.src(jsFilePath)
  .pipe(named())
  .pipe(webpack(config))
  .pipe(gulp.dest(jsOutput))
)

gulp.task('build-html', () =>
  gulp.src(tplFilePath)
  .pipe(gulp.dest(tplOutput))
)

gulp.task('build-scss', () =>
  gulp.src(cssFilePath)
  .pipe(sass())
  .pipe(autoprefixer({
    browsers: ['last 40 versions'],
    cascade: false
  }))
  .pipe(gulp.dest(cssOutput))
)

gulp.task('clean-css', () =>
  gulp.src(`${cssOutput}/**/*.css`)
  .pipe(vinylPaths(del))
)

gulp.task('watch', () => {
  gulp.watch(watchPath, ['default'])
})

gulp.task('default', () =>
  runSequence('build-html', 'build-scss', 'build-js', 'clean-css')
)
