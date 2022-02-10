const rq = require('request-promise')

export const createGithubRequest = (opt) => {
	var options = {
    headers: {
        'User-Agent': 'Request-Promise',
		// 添加基本权限 提高请求上限至每分钟5000次
		'Authorization': 'Basic OGJjMWFiZmZjYzM4YmZmYjIyZmU6ZGEzOTIxZDJhNTRiZjg0YjNhNzM3ZWEzY2ZmOWE5ODM1NDY5MWVhOA=='
    },
    json: true, // 自动将响应数据转为json格式
		...opt
	}
	return () => rq(options)
}
