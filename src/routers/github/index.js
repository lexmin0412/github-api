const express = require('express')
const github = express.Router()
import users from './users'
import repos from './repos'
import emojis from './emojis'
import search from './search'
import events from './events'

github.use('/users', users)
github.use('/repos', repos)
github.use('/emojis', emojis)
github.use('/search', search)
github.use('/events', events)

export default github
