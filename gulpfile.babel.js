import { task, series, parallel } from 'gulp'
import server from './tasks/server'
import generate from './tasks/generate'

task('default',
  series(
    parallel(
      generate.css,
      generate.other
    ),
    parallel(
      server.start,
      server.observe
    )
  )
)
