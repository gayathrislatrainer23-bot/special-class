const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')
const middlewareToken = require('../middleware/token')
router.post('/login',authController.userLogin)
router.post('/profile',middlewareToken,authController.userLogin)

module.exports =router
