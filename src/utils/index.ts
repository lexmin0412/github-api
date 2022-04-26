import { GITHUB_API_BASE_TOKEN } from './../../config/prod'
const rq = require('request-promise')

/**
 * 通过原始头部的到github api需要的headers
 */
export const getHeaders = (originHeaders) => {
	return {
		'User-Agent': 'Request-Promise',
		'Authorization': originHeaders.Authorization || GITHUB_API_BASE_TOKEN,
	}
}

/**
 * 创建一个github api请求
 */
export const createGithubRequest = (opt) => {
	var options = {
    json: true, // 自动将响应数据转为json格式
		...opt,
		headers: getHeaders(opt.headers)
	}
	return () => rq(options)
}
