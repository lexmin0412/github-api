const express = require('express')
const repos = express.Router()
const { createGithubRequest } = require('../../utils/index')
const {
	GITHUB_API_BASE
} = require('../../../config/prod')

/**
 * 获取仓库的贡献者列表
 */
repos.get('/:owner/:repo/contributors', async(req, res)=>{
	const { owner, repo } = req.params
	console.log(`${GITHUB_API_BASE}/repos/${owner}/${repo}/contributors`);
	const rq = createGithubRequest({
		uri: `${GITHUB_API_BASE}/repos/${owner}/${repo}/contributors`
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
 * 获取仓库的语言列表
 */
repos.get('/:owner/:repo/languages', async(req, res)=>{
	const { owner, repo } = req.paramsetTimeout(() => {

	}, timeout);
	const rq = createGithubRequest({
		uri: `${GITHUB_API_BASE}/repos/${owner}/${repo}/languages`
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
 * 获取仓库的tag列表
 */
repos.get('/:owner/:repo/tags', async(req, res)=>{
	const { owner, repo } = req.params
	const rq = createGithubRequest({
		uri: `${GITHUB_API_BASE}/repos/${owner}/${repo}/tags`
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
 * 获取仓库的topic列表
 */
repos.get('/:owner/:repo/topics', async(req, res)=>{
	const { owner, repo } = req.params
	const rq = createGithubRequest({
		uri: `${GITHUB_API_BASE}/repos/${owner}/${repo}/topics`
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
 * 获取仓库的readme
 */
repos.get('/:owner/:repo/readme', async(req, res)=>{
	const { owner, repo } = req.params
	const rq = createGithubRequest({
		uri: `${GITHUB_API_BASE}/repos/${owner}/${repo}/readme`
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
 * 获取仓库的fork列表
 */
repos.get('/:owner/:repo/forks', async(req, res)=>{
	const { owner, repo } = req.params
	const rq = createGithubRequest({
		uri: `${GITHUB_API_BASE}/repos/${owner}/${repo}/forks`
	})
	rq().then((resp)=>{
		res.send({
			code: 0,
			data: resp,
			msg: ''
		})
	})
})

module.exports = repos
