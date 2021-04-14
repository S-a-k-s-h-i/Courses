const express = require('express')
const route = express.Router()

//all request will go through this middleware
route.use((req,res,next) => {
    console.log('middleware used')
    next()
})

route.get('/',(req,res) =>{
    res.send('route hit /')
})
route.get('/example',(req,res) => {
    res.send('route hit /example')
})

module.exports = route