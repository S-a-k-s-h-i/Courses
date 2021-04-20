const express = require("express");
const app = express()
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const employeesRouter = require("./src/routes/employee.routes")
dotenv.config();

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;
app.use('/api/v1/employee',employeesRouter)


app.listen(process.env.PORT,() => {
    console.log('server running')
})