import express from 'express'
const apiMock = express.Router()
import { createGithubRequest } from '../../utils/index'
import dayjs from 'dayjs'

/**
 * 获取表情列表
 */
apiMock.get('/list', async (req: any, res: any) => {

  console.log('req.query', req.query)

  const dataBase = [
    {
      describe: '获取商品详情',
      method: 'GET',
      url: '/goods/detail',
      statusCode: 200
    },
    {
      describe: '更新商品详情',
      method: 'PUT',
      url: '/goods/detail',
      statusCode: 200
    },
    {
      describe: '新增商品详情',
      method: 'POST',
      url: '/goods/detail',
      statusCode: 200
    },
    {
      describe: '删除商品详情',
      method: 'DELETE',
      url: '/goods/detail',
      statusCode: 200
    },
    {
      describe: '获取订单详情',
      method: 'GET',
      url: '/order/detail',
      statusCode: 200
    },
    {
      describe: '更新订单详情',
      method: 'PUT',
      url: '/order/detail',
      statusCode: 200
    },
    {
      describe: '新增订单详情',
      method: 'POST',
      url: '/order/detail',
      statusCode: 200
    },
    {
      describe: '删除订单详情',
      method: 'DELETE',
      url: '/order/detail',
      statusCode: 200
    },
    {
      describe: '获取评论详情',
      method: 'GET',
      url: '/comment/detail',
      statusCode: 200
    },
    {
      describe: '更新评论详情',
      method: 'PUT',
      url: '/comment/detail',
      statusCode: 200
    },
    {
      describe: '新增评论详情',
      method: 'POST',
      url: '/comment/detail',
      statusCode: 200
    },
    {
      describe: '删除评论详情',
      method: 'DELETE',
      url: '/comment/detail',
      statusCode: 200
    },
  ]

  let result: any[] = dataBase.map((item, index)=>{
    return {
      ...item,
      id: index + 1,
      author: Math.random() > 0.5 ? '张三' : '李四',
      create_time: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    }
  })

  if (req.query.describe) {
    result = result.filter(item => {
      return item.describe.includes(req.query.describe)
    })
  }
  console.log('过滤关键词', result);
  
  if ( req.query.url ) {
    result = result.filter(item => {
      return item.url.includes(req.query.url)
    })
  }
  console.log('过滤url', result);
  
  
  res.send({
    code: 0,
    count: result.length,
    results: result,
    msg: '恭喜我黄拿到数据啦'
  })
})

export default apiMock