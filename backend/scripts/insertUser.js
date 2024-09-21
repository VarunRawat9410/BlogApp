const mongoose = require('mongoose')
const user = require('../models/user')
require('dotenv').config()

mongoose.connect(process.env.Mongo_URI, {useNewUrlParser:true, useUnifiedTopology:true})
.then(async()=>{
    const user = new user({name:'John Doe', email:'john@example.com', age:25})
    await user.save()
    console.info('User inserted')
    mongoose.connection.close()
})
.catch(err=> console.log(err))