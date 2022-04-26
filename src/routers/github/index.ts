const express = require('express')
const github = express.Router()
import users from './users'
import repos from './repos'
import emojis from './emojis'
import search from './search'
import events from './events'
import oauth from './oauth'

github.use('/users', users)
github.use('/repos', repos)
github.use('/emojis', emojis)
github.use('/search', search)
github.use('/events', events)
github.use('/oauth', oauth)

export default github
