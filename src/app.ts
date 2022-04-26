import express from 'express'
const app = express()
import bodyParser from 'body-parser'
import githubRouter from './routers/github/index'

app.use(bodyParser())

app.use(function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')  // 允许跨域
  res.append('Access-Control-Allow-Headers', '*')  // 允许传递header字段，如content-type
  next()
})

app.use('/github', githubRouter)

app.listen(9080)