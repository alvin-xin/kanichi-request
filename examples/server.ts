/**
 * @format
 * @Author: Alvin
 * @Date 2020-03-29
 * @Last modified by: Alvin
 * @Last modified time: 2020-03-29
 */
const fs = require("fs");
const path = require("path")
// import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import WebpackConfig from './webpack.config'

const app = express()
const compiler = webpack(WebpackConfig)

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: '/__build__/',
    stats: {
      colors: true,
      chunks: false
    }
  })
)

app.use(webpackHotMiddleware(compiler))

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const router = express.Router()

registerIndexRouter()

registerSimpleRouter()

app.use(router)
const port = process.env.PORT || 9090
module.exports = app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}, Ctrl+C to stop`)
})

// ---------------------- router --------------------------

function registerIndexRouter() {
  let dirs
  function listDirs(root: any) {
    const files = fs.readdirSync(root)
    const dirs = []

    const l = files.length;
    for (let i = 0; i < l; i++) {
      const file = files[i]
      if (file[0] !== '.') {
        const stat = fs.statSync(path.join(root, file))
        if (stat.isDirectory()) {
          dirs.push(file)
        }
      }
    }

    return dirs
  }
  dirs = listDirs(__dirname)

  console.log('dirs ::: ', dirs)

  const links = dirs.map(function(dir) {
    const url = '/' + dir
    return (
      '<li onclick="document.location=\'' + url + '\'"><a href="' + url + '">' + url + '</a></li>'
    )
  })

  const body =
    '<!doctype html>' +
    '<html>' +
    '<head>' +
    '<title>kanichi-request web examples</title>' +
    '<style>' +
    'body {padding:25px;}' +
    'ul {margin:0; padding:0; list-style:none;}' +
    'li {padding:5px 10px;}' +
    'li:hover {background:#eee; cursor:pointer;}' +
    'a {text-decoration:none; color:#0080ff;}' +
    '</style>' +
    '<body>' +
    '<ul>' +
    links.join('') +
    '</ul>'

  router.get('/', function(req, res) {
    res.writeHead(200)
    res.write(body)
    res.end()
  })
}

function registerSimpleRouter() {
  router.get('/simple/get', function(req, res) {
    res.json({
      msg: `hello world`
    })
  })
}
