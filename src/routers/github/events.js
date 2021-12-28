const express = require('express')
const events = express.Router()
import { createGithubRequest } from '../../utils/index'
import  {
	GITHUB_API_BASE
} from '../../../config/prod'

/**
 * 用户信息
 */
events.get('/', async(req, res)=>{
	const { name } = req.params
	const rq = createGithubRequest({
		uri: `${GITHUB_API_BASE}/events`
	})
	rq().then((resp)=>{
		res.send({
			code: 0,
			data: resp,
			msg: ''
		})
	})
})

export default events
