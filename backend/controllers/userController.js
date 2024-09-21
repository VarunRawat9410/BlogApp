const User = require('../models/user')
const axios = require('axios');


//Get all users
const getUsers = async (req, res) => {
    try {
        const response = await axios.get('https://dummyjson.com/users');
        res.json(response.data);
    } catch (error) {
        console.error('Error making API call:', error);
        res.status(500).send('Error fetching data');
    }
}

const createUser = async (req, res) => {
    const { name, email, age } = req.body
    const newUser = new User({ name, email, age })
    await newUser.save()
    res.json(newUser)
}

const getUserByEmail = async (req, res) => {
    const user = await User.findOne({ email: req.params.email })
    if (user) {
        res.json(user)
    } else {
        res.status(404).json({ message: 'User not found' })
    }
}

module.exports={getUsers, getUserByEmail, createUser}