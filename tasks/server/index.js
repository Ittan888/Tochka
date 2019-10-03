import { watch, series } from 'gulp'
import browserSync from 'browser-sync'
import serveStatic from 'serve-static'
import connectSSI from 'connect-ssi'

import generate from '../generate'

const path = {
  docRoot: './dist',
  docRootPwd: `${__dirname}/dist`
}

const start = (done) => {
  browserSync.init({
    server: {
      baseDir: path.docRoot,
      middleware: [
        connectSSI({
          baseDir: path.docRootPwd,
          ext: ".html"
        }),
        serveStatic(path.docRootPwd)
      ]
    }
  })

  done()
}

const reload = (done) => {
  browserSync.reload()
  done()
}

const observe = (done) => {

  watch('./src/**/*.scss')
  .on('change', series(generate.css, reload))

  watch(['./src/**/*', '!./src/**/*.scss', '!./src/**/_*.scss'])
  .on('change', series(generate.other, reload))

  done()
}


export default {
  start,
  observe
}