const express = require('express')
const path = require('path')
const app = express();
const bodyParser = require('body-parser');
const Joi = require('joi')

//whenever we see app.use it means that we are using middleware 
console.log(path.join(__dirname,'static'))
const staticPath = path.join(__dirname,'static')
app.use(express.static(staticPath))
//whenever we use middleware we use app.use
//allows us to parse url encoded forms
//it parses the data for us and attaches it to the request body
app.use(bodyParser.urlencoded({extended:false}));
app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'public','index.html'))
})
app.post('/',(req,res) => {
    const schema = Joi.object().keys({
                //must be a string and trim the white spaces
                //call method email which will check whether this is a valid email
                //required makes sure that user fill up email
        email : Joi.string().trim().email().required(),
        password:Joi.string().min(5).max(10).required()
    })
    //takes three argument
    //1st object you want to validate
    //2nd is the blue print => schema
    //3rd callback function
    const result = schema.validate(req.body)
    res.send(result)
    if(result.error){
        console.log(result.error)
        console.log('an error occurred '+result.error.details[0].message)
    }else{
        console.log(result.value)
    }

})
app.listen(3000)
