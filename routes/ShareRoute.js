const express = require('express')
const { share, twitterShare } = require('../controllers/ShareController')

const router = express.Router()

router.get('/', share)
router.get('/twitter', twitterShare)


module.exports = router




