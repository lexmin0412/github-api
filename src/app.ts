import express from 'express'
const app = express()
import bodyParser from 'body-parser'
import githubRouter from './routers/github/index'
import mockRouter from './routers/mock/index'

app.use(bodyParser())

app.use(function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')  // 允许跨域
  res.append('Access-Control-Allow-Headers', '*')  // 允许传递header字段，如content-type
  res.append('Access-Control-Allow-Methods', '*')  // 允许所有方法（如果不加put会报跨域）
  next()
})

app.use('/github', githubRouter)
app.use('/mock', mockRouter)

app.listen(9080)