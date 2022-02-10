const express = require('express')
const repos = express.Router()
import { createGithubRequest } from '../../utils/index'
import {
	GITHUB_API_BASE
} from '../../../config/prod'

/**
 * 获取仓库相关信息
 */
repos.get('/:owner/:repo/:info_type', async(req, res)=>{
	const { owner, repo, info_type } = req.params
	const rq = createGithubRequest({
		uri: `${GITHUB_API_BASE}/repos/${owner}/${repo}/${info_type}`,
		qs: req.query
	})
	rq().then((resp)=>{
		res.send({
			code: 0,
			data: resp,
			msg: ''
		})
	})
})

export default repos
