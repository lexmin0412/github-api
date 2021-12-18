const express = require('express')
const users = express.Router()
const { createGithubRequest } = require('../../utils/index')
const {
	GITHUB_API_BASE
} = require('../../../config/prod')

/**
 * 用户信息
 */
users.get('/:name', async(req, res)=>{
	const { name } = req.params
	const rq = createGithubRequest({
		uri: `${GITHUB_API_BASE}/users/${name}`
	})
	rq().then((resp)=>{
		res.send({
			code: 0,
			data: resp,
			msg: ''
		})
	})
})

/**
 * 获取用户仓库列表
 */
users.get('/:name/repos', async(req, res)=>{
	const { name } = req.params
	const rq = createGithubRequest({
		uri: `${GITHUB_API_BASE}/users/${name}/repos`
	})
	rq().then((resp)=>{
		res.send({
			code: 0,
			data: resp,
			msg: ''
		})
	})
})

/**
 * 获取用户关注者
 */
users.get('/:name/followers', async(req, res)=>{
	const { name } = req.params
	const rq = createGithubRequest({
		uri: `${GITHUB_API_BASE}/users/${name}/followers`
	})
	rq().then((resp)=>{
		res.send({
			code: 0,
			data: resp,
			msg: ''
		})
	})
})

/**
 * 获取用户的关注用户列表
 */
users.get('/:name/followers', async(req, res)=>{
	const { name } = req.params
	const rq = createGithubRequest({
		uri: `${GITHUB_API_BASE}/users/${name}/following`
	})
	rq().then((resp)=>{
		res.send({
			code: 0,
			data: resp,
			msg: ''
		})
	})
})

module.exports = users
