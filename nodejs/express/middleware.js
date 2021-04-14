const express = require('express')
const app = express()
const bodyparser = require('body-parser')

app.use(bodyparser.json())
//creating our own middleware
app.use((req,res,next) => {
       req.apple ='apple'
       next()
}) 
app.get('/',(req,res) => {
    console.log(req.apple)
    res.send('Middleware')
})
app.listen(3000)