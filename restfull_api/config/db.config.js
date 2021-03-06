const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();

const dbConn = mysql.createConnection({
    host:process.env.HOST,
    user:process.env.USERNAME,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
})
dbConn.connect((err) => {
    if(err) console.log(err.message)
    else console.log('db ',dbConn.state)
})

module.exports = dbConn