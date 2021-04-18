const express = require("express");
const app = express();
const { people } = require('./public/data')

app.get('/api/people',(req,res) => {
    res.status(200).json({success:true, data:people})
})

app.listen(3000,() => {
    console.log('listening on port 3000')
})