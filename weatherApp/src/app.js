const express = require("express");
const hbs = require("hbs");
const path = require("path");
const app = express()
const weatherData = require('../utils/weatherData')

const port = process.env.PORT || 5000

//static files
const publicStaticPathDir = path.join(__dirname,'../public');

//views path
const viewsPath = path.join(__dirname,'../templates/views');

//partials path
const partialsPath = path.join(__dirname,'../templates/partials');

//view engine
app.set('view engine','hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicStaticPathDir));

app.get('/', (req,res) => {
    res.render('index',{
        title:'Weather app'
    });
})

app.get('/weather', (req,res) => {
    const address = req.query.address
    if(address){
        weatherData(address,(error,{temperature,description,cityName} = {}) => {
            if(error){
                return res.send({
                    error
                })
            }
            console.log(temperature,description,cityName)
            res.send({
                temperature,
                description,
                cityName
            })
        })
    }else{
        return res.send({
            error:"you must enter address in search box"
        })
    }
})
app.get('*', (req,res) => {
    res.render('404',{
        title:"page not found"
    })
})

app.listen(port,() => {
    console.log('server running');
})