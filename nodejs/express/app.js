const express = require('express')
const app = express()
app.get('/',(req,res) => {
    res.send('hello from express')
})
app.get('/example',(req,res) => {
    res.send('hitting example route')
})
//getting the value from parameter
app.get('/example/:name/:age',(req,res) => {
    console.log(req.params);
    console.log(req.query)
    res.send(req.params.name+' : '+req.params.age)
})

app.listen(3000)