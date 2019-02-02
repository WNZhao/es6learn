const gulp = require('gulp');


gulp.task('init', () => new Promise((res, rej) => {
    console.log('hello gulp... init ...')
    res()
}))

gulp.task('default', gulp.series('init'))
