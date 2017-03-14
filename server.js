'use strict'

const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.config')
const open = require('open')
const path = require('path')
const resolve = file => path.resolve(__dirname, file)
const favicon = require('serve-favicon')
const PORT = parseInt(process.env.PORT || 7700)
const app = new express()
app.use((req, res, next) => {
	req.url = req.url.replace(/^\/[^(.|_)]*$/, '/')
	next()
})
const compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, config.middlewareSetting))
app.use(webpackHotMiddleware(compiler))
app.use(express.static(config.output.path))
app.use(favicon(resolve('./src/assets/img/favicon.ico')))

app.listen(PORT, err => {
	err && console.log(err)
	console.log('Listening at localhost:' + PORT)
	console.log('Opening your system browser...')
	open('http://localhost:' + PORT+'/music')
})
