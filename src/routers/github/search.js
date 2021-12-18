const express = require('express')
const search = express.Router()
const { createGithubRequest } = require('../../utils/index')
const {
	GITHUB_API_BASE
} = require('../../../config/prod')

/**
 * 搜索代码
 */
search.get('/code', async(req, res)=>{
	const { q } = req.query
	console.log('req', req.query);
	const rq = createGithubRequest({
		uri: `${GITHUB_API_BASE}/search/code`,
		qs: {
			q
		}
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
 * 搜索仓库
 */
search.get('/repositories', async(req, res)=>{
	const { q } = req.query
	const rq = createGithubRequest({
		uri: `${GITHUB_API_BASE}/search/repositories`,
		qs: {
			q
		}
	})
	rq().then((resp)=>{
		res.send({
			code: 0,
			data: resp,
			msg: ''
		})
	})
})

module.exports = search
