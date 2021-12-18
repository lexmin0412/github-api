const express = require('express')
const app = express()
const rq = require('request-promise')
const bodyParser = require('body-parser')
const githubRouter = require('./routers/github/index')

app.use(bodyParser())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.use('/github', githubRouter)

// app.get('/github/users/:name', function(req, res) {

// 	const { name } = parmas

// 	var options = {
//     uri: `https://api.github.com/users/${name}`,
//     headers: {
//         'User-Agent': 'Request-Promise'
//     },
//     json: true // 自动将响应数据转为json格式
// 	};

// 	rq(options).then((resp)=>{
// 		console.log('请求结果', resp);
// 		res.send({
// 			code: 0,
// 			data: resp,
// 			msg: ''
// 		})
// 	}).catch((err)=>{
// 		console.log('请求错误', err);
// 		res.send({
// 			code: 1001,
// 			msg: '请求github api错误'
// 		})
// 	})
// })

app.listen(6000)
