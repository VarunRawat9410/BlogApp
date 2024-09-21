const express = require('express')
const router = express.Router()
const { getUsers, createUser, getUserByEmail } = require('../controllers/userController')


router.get('/',getUsers)
router.post('/',createUser)
router.get('/:email', getUserByEmail)

module.exports = router;


