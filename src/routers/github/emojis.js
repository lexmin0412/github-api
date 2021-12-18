const express = require('express')
const emojis = express.Router()
const { createGithubRequest } = require('../../utils/index')
const {
	GITHUB_API_BASE
} = require('../../../config/prod')

/**
 * 获取表情列表
 */
emojis.get('/', async(req, res)=>{
	const { name } = req.params
	const rq = createGithubRequest({
		uri: `${GITHUB_API_BASE}/emojis`
	})
	rq().then((resp)=>{
		res.send({
			code: 0,
			data: resp,
			msg: ''
		})
	})
})

module.exports = emojis
