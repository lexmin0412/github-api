const express = require('express')
const emojis = express.Router()
import { createGithubRequest } from '../../utils/index'
import {
	GITHUB_API_BASE
} from '../../../config/prod'

/**
 * 获取表情列表
 */
emojis.get('/', async(req, res)=>{
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

export default emojis
