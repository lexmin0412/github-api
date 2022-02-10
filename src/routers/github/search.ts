const express = require('express')
const search = express.Router()
import { createGithubRequest } from '../../utils/index'
import {
	GITHUB_API_BASE
} from '../../../config/prod'

/**
 * 搜索代码
 */
search.get('/:source_type', async(req: {
	params: {
		source_type: 'code' | 'commits' | 'issues' | 'labels' | 'repositories' | 'topics' | 'users'
	},
	query: any
}, res)=>{
	const { source_type } = req.params
	const rq = createGithubRequest({
		uri: `${GITHUB_API_BASE}/search/${source_type}`,
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


export default search
