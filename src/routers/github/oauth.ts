import express from 'express'
const rq = require('request-promise')
const oauth = express.Router()
import {
	GITHUB_API_BASE,
  GITHUB_AUTH_BASE,
  GITHUB_OAUTH_APP_CLIENT_ID,
  GITHUB_OAUTH_APP_CLIENT_SECRET,
  GITHUB_OAUTH_APP_HOME
} from '../../../config/prod'
import {createGithubRequest} from '../../utils'

/**
 * oauth授权
 */
oauth.get('/redirect', async(req: any, res: any)=>{
  console.log('回调参数', req.query);
  
  const requestToken = req.query.code;
  console.log('authorization code:', requestToken);

  const tokenResponse = await rq({
    uri: `${GITHUB_AUTH_BASE}/login/oauth/access_token?client_id=${GITHUB_OAUTH_APP_CLIENT_ID}&client_secret=${GITHUB_OAUTH_APP_CLIENT_SECRET}&code=${requestToken}`,
    headers: {
      accept: 'application/json'
    },
    json: true,
  })

  console.log('tokenResponse', tokenResponse);

  const accessToken = tokenResponse.access_token;
  console.log(`access token: ${accessToken}`);

  const result = await createGithubRequest({
    uri: `${GITHUB_API_BASE}/user`,
    headers: {
      accept: 'application/json',
      Authorization: `token ${accessToken}`
    },
    json: true
  })()
  console.log('返回数据',result);
  const login = result.login;
  console.log('login', login);

  res.redirect(`${GITHUB_OAUTH_APP_HOME}?token=${accessToken}`);
})

export default oauth