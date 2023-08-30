const express = require('express')
const router = express.Router()

const Service = require('../services/Services')

router.get('/', Service.checkSrv)

router.get('/send', Service.sendMessage)


module.exports = router