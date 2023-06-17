const express = require('express')
const { share } = require('../controllers/ShareController')

const router = express.Router()

router.get('/', share)

module.exports = router




