import express from 'express'
const apiMock = express.Router()
import { createGithubRequest } from '../../utils/index'
import dayjs from 'dayjs'
import fs from 'fs'
import path from 'path'

const databasePath = path.join(__dirname, 'api-list.json')

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

apiMock.get('/prod-api/mock_api_info', async (req: any, res: any) => {

  const result: any = fs.readFileSync(databasePath, 'utf-8')
  

  console.log('result', result)
  
  res.send({
    code: 0,
    count: result.length,
    results: JSON.parse(result).list.sort((a: any, b: any) =>b.id-a.id),
    msg: '恭喜我黄拿到数据啦'
  })
} )

apiMock.get('/prod-api/mock_api_detail', async (req: any, res: any) => {

  const result: any = fs.readFileSync(databasePath, 'utf-8')
  const { id } = req.query

  const current = JSON.parse(result).list.find((item: any) => item.id === Number(id))

  console.log('result', result)

  res.send({
    code: 0,
    data: current ? {
      ...current,
      responseData: JSON.stringify(current.responseData)
    }: null,
    msg: '恭喜我黄拿到数据啦'
  })
})

apiMock.post('/prod-api/mock_api_create', async(req: {
  body: {
    describe: string
    method: string
    url: string
    statusCode: number
    responseBody: any
  }
}, res: any) => {
  const { body } = req
  const database = require(databasePath)
  const { list } = database
  console.log('list', list)
  const assembledData = {
    ...database,
    list: list.concat([{
      ...body,
      author: Math.random() > 0.5 ? '张三' : '李四',
      create_time: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      id: list.length + 1
    }])
  }
  await fs.writeFileSync(databasePath, JSON.stringify(assembledData))
  res.send({
    code: 0,
    results: null,
    msg: '新增接口成功'
  })
} )

export default apiMock