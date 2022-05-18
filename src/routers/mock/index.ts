import express from 'express'
const github = express.Router()
import apiMock from './api-mock-server'

github.use('/api-mock-server', apiMock)

export default github