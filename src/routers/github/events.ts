import express from 'express'
const events = express.Router()
import { createGithubRequest } from '../../utils/index'
import  {
	GITHUB_API_BASE
} from '../../../config/prod'

/**
 * 用户信息
 */
events.get('/', async(req: any, res: any)=>{
	const { name } = req.params
	const rq = createGithubRequest({
		uri: `${GITHUB_API_BASE}/events`
	})
	rq().then((resp: any)=>{
		res.send({
			code: 0,
			data: resp,
			msg: ''
		})
	})
})

export default events
