import express from 'express'
const users = express.Router()
import { createGithubRequest } from './../../utils/index'
import { GITHUB_API_BASE } from '../../../config/prod'

/**
 * 用户信息
 */
users.get('/:name', async(req: any, res: any)=>{
	const { name } = req.params
	const rq = createGithubRequest({
		uri: `${GITHUB_API_BASE}/users/${name}`
	})
	rq().then((resp: any)=>{
		res.send({
			code: 0,
			data: resp,
			msg: ''
		})
	})
})

/**
 * 获取用户相关的数据列表
 */
users.get('/:name/:datatype', async(req: any, res: any)=>{
	const { name, datatype} = req.params
	const rq = createGithubRequest({
		uri: `${GITHUB_API_BASE}/users/${name}/${datatype}`,
		qs: req.query
	})
	rq().then((resp: any)=>{
		res.send({
			code: 0,
			data: resp,
			msg: ''
		})
	})
})

// /**
//  * 获取用户仓库列表
//  */
// users.get('/:name/repos', async(req: any, res: any)=>{
// 	const { name } = req.params
// 	const rq = createGithubRequest({
// 		uri: `${GITHUB_API_BASE}/users/${name}/repos`,
// 		qs: req.query
// 	})
// 	rq().then((resp: any)=>{
// 		res.send({
// 			code: 0,
// 			data: resp,
// 			msg: ''
// 		})
// 	})
// })

// /**
//  * 获取用户仓库列表
//  */
// users.get('/:name/starred', async(req: any, res: any)=>{
// 	const { name } = req.params
// 	const rq = createGithubRequest({
// 		uri: `${GITHUB_API_BASE}/users/${name}/starred`,
// 		qs: req.query
// 	})
// 	rq().then((resp: any)=>{
// 		res.send({
// 			code: 0,
// 			data: resp,
// 			msg: ''
// 		})
// 	})
// })

// /**
//  * 获取用户关注者
//  */
// users.get('/:name/followers', async(req: any, res: any)=>{
// 	const { name } = req.params
// 	const rq = createGithubRequest({
// 		uri: `${GITHUB_API_BASE}/users/${name}/followers`
// 	})
// 	rq().then((resp: any)=>{
// 		res.send({
// 			code: 0,
// 			data: resp,
// 			msg: ''
// 		})
// 	})
// })

// /**
//  * 获取用户的关注用户列表
//  */
// users.get('/:name/followers', async(req: any, res: any)=>{
// 	const { name } = req.params
// 	const rq = createGithubRequest({
// 		uri: `${GITHUB_API_BASE}/users/${name}/following`
// 	})
// 	rq().then((resp: any)=>{
// 		res.send({
// 			code: 0,
// 			data: resp,
// 			msg: ''
// 		})
// 	})
// })

export default users
