const express = require('express')
const axios = require('axios');
const router = express.Router();


router.get('/',async (req,res)=>{
    try {
        const response = await axios.get('https://dummyjson.com/users');
        res.json(response.data);
    } catch (error) {
        console.error('Error making API call:', error);
        res.status(500).send('Error fetching data');
    }
})

module.exports = router;