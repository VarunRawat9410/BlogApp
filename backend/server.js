const express = require('express')
const http = require('http')
const app = express()

const cors = require('cors')
app.use(cors())


const userRoutes = require('./routes/userRoutes')

app.use('/users', userRoutes)

app.get('/',(req,res)=>{
    res.send('Hello, World!')
})

app.use((req, res) => {
    res.status(404).send('Not Found')
})


const server = http.createServer(app)

server.listen(3000,()=>{
    console.log('Server is listening on port 3000')
})