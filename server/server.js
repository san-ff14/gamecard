import express from 'express'
import consola from 'consola'
import { Nuxt, Builder } from 'nuxt'
import Rest from './rest'
import { serverPort } from '../config'

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || serverPort || 3000

app.set('port', port)

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

const start = async () => {
  const nuxt = new Nuxt(config)
  if(config.dev){
    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.use('/rest', Rest)
  app.use(nuxt.render)

  let server = app.listen(port, host)
  consola.ready({ message: `Nuxt Server listening on http://${host}:${port}`, badge: true })
}

start()
