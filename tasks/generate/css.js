import { src, dest } from 'gulp'
import sourcemaps from 'gulp-sourcemaps'
import sass from 'gulp-sass'
import plumber from 'gulp-plumber'

const path = {
  src: './src/**/*.scss',
  dist: './dist',
  reject: '!./src/**/_*.scss'
}


export default (done) => {

  src([path.src, path.reject])
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(sass({ outputStyle: 'expanded' }))
  .pipe(sourcemaps.write('./.maps'))
  .pipe(dest(path.dist))

  done()
}