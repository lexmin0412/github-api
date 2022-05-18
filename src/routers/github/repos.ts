import express from 'express'
const repos = express.Router()
import { createGithubRequest } from '../../utils/index'
import {
	GITHUB_API_BASE
} from '../../../config/prod'

/**
 * 获取仓库基本信息
 */
repos.get('/:owner/:repo', async(req: any, res: any)=>{
	const {owner, repo } = req.params
	console.log('userName', owner)
	const rq = createGithubRequest({
		uri: `${GITHUB_API_BASE}/repos/${owner}/${repo}`,
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
 * 获取仓库相关信息
 */
repos.get('/:owner/:repo/:info_type', async(req: any, res: any)=>{
	const { owner, repo, info_type } = req.params
	const headers: any = {}
	if ( info_type === 'readme' ) {
		headers['Accept'] = 'application/vnd.github.v3+json'
	}
	const rq = createGithubRequest({
		uri: `${GITHUB_API_BASE}/repos/${owner}/${repo}/${info_type}`,
		qs: req.query,
		Headers: headers
	})
	rq().then((resp: any)=>{
		res.send({
			code: 0,
			data: resp,
			msg: ''
		})
	})
})

export default repos
