const express = require("express")
const app = express()
const cors= require("cors")
const dotenv = require("dotenv")

dotenv.config();

const dbService = require("./dbService");

//doesnot block the encoming request and send data to backend
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//create
app.post('/insert',(req,res) => {
    const { name } =req.body;
    const db = dbService.getDbServiceInstance(); 
    const result= db.insertNewData(name);

   result
   .then(data => res.json({data:data}))
   .catch(err => console.log(err))
})

//read
app.get('/getall',(req,res) => {
   const db = dbService.getDbServiceInstance(); 
   const result= db.getAllData();  //returning a promise
   result
   .then(data => res.json({data : data}))
   .catch(err => console.log(err));   
})
//update
app.put('/edit', (req,res) => {
    const {id,name } = req.body
    const db = dbService.getDbServiceInstance(); 
    const result= db.editById(id,name);  //returning a promise
    result
    .then(data => res.json({success:data}))
    .catch(err => console.log(err)); 
})

//delete
app.delete('/delete/:id',(req,res) => {
    const { id } =req.params
    const db = dbService.getDbServiceInstance(); 
    const result= db.deleteById(id);  //returning a promise
    result
    .then(data => res.json({success:data}))
    .catch(err => console.log(err)); 
})

//search
app.get('/search/:name',(req,res) => {
    const { name } =req.params
    const db = dbService.getDbServiceInstance(); 
    const result= db.searchByName(name); 
    result
    .then(data => res.json({data:data}))
    .catch(err => console.log(err)); 
})

app.listen(process.env.PORT, () => {
    console.log("server running")
})