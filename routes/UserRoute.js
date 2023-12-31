const express = require('express')
const { getUser, queryUser, getAllUsers, followUser, unfollowUser, update, sendStreamingKey } = require('../controllers/UserController.js')

const router = express.Router()

router.get('/:id', getUser)
router.get('/:name/search', queryUser)
router.get('/', getAllUsers)
router.post('/follow', followUser)
router.post('/unfollow', unfollowUser)
router.post('/update', update)
router.post('/sendStreamingKey', sendStreamingKey)

module.exports = router