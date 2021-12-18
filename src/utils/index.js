const rq = require('request-promise')

const createGithubRequest = (opt) => {
	var options = {
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true, // 自动将响应数据转为json格式
		...opt
	}
	return () => rq(options)
}

module.exports = {
	createGithubRequest
}
