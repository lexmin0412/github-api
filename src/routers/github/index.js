const express = require('express')
const github = express.Router()
const users = require('./users')
const repos = require('./repos')
const emojis = require('./emojis')
const search = require('./search')

github.use('/users', users)
github.use('/repos', repos)
github.use('/emojis', emojis)
github.use('/search', search)

module.exports = github
