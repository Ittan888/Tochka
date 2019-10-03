import { src, dest } from 'gulp'
import css from './css'

const path = {
  src: './src/**/*',
  dist: './dist',
  reject: ['!./src/**/*.scss', '!./src/**/_*.scss']
}

const other = (done) => {

  src([ path.src, ...path.reject ])
  .pipe(dest(path.dist))

  done()
}

export default {
  css,
  other
}