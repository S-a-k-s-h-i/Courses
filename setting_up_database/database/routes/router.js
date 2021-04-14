const express = require("express");
const route = express.Router();
var config = require('../db/connection');
var connection= config.connection

/**
 * @description select Route
 * @method GET/
 */
route.get('/select',(req,res) => {
    const sql = "SELECT * FROM students"
    connection.query(sql,(err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

/**
 * @description insert Route
 * @method POST/
 */
route.get('/insert',(req,res) => {
    const sql = "INSERT INTO students (name,class,school_name,phoneno,age) VALUES (?,?,?,?,?)"
    connection.query(sql,['riya',6,'aps',12345,12],(err,result) => {
        if(err) throw err;
        console.log("1 record inserted");
        res.send(result)
    })
})

module.exports = route