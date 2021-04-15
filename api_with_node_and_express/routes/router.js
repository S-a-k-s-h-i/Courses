const express = require("express");
const Joi = require("joi");
const route = express.Router();
var config = require('../db/connection');
var connection= config.connection

route.use(express.json())

/**
 * @description api/customers Route
 * @method GET/
 */
route.get('/api/customers',(req,res) => {
    const sql = "SELECT * FROM customers"
    connection.query(sql,(err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

/**
 * @description api/customers/:id Route
 * @method GET/:id
 */
route.get('/api/customers/:id',(req,res) => {
    const sql = "SELECT * FROM customers WHERE rollno = ?"
    connection.query(sql,parseInt(req.params.id),(err,result) => {
        if(result.length ===0) {res.status(404).send("Customer with the given id was not found")}else
        {res.send(result)}
    })
})

/**
 * @description api/cutomers Route
 * @method POST/
 */
route.post('/api/customers',(req,res) => {
    const { error } = validateCustomer(req.body)   //result.error
    if(error) return res.status(400).send(error.details[0].message) 
    const customer = req.body
    const sql = "INSERT INTO customers (name,age,phoneno) VALUES (?,?,?)"
    connection.query(sql,[customer.name,customer.age,customer.phoneno],(err,result) => {
        if(err) throw err;
        console.log("1 record inserted");
        res.send(result)
    })
})

/**
 * @description api/cutomers Route
 * @method Put/
 */
route.put('/api/customers/:id',(req,res) => {
    //Look for the customer
    //if not existing , return
    const sql = "SELECT * FROM customers WHERE rollno = ?"
    connection.query(sql,[parseInt(req.params.id)],(err,result) => {
        if(result.length === 0) return res.status(404).send("Customer with the given id was not found");
        
    })
    //Validate
    //If invalid , return 400 => Bad Request
    const { error } = validateCustomer(req.body)   //result.error
    if(error) return res.status(400).send(error.details[0].message)

    //Update the customer
    //Return updated customer
    connection.query( "UPDATE customers SET age = ?,phoneno = ? WHERE rollno = ?",[req.body.age,req.body.phoneno,parseInt(req.params.id)], 
    (err, result) => {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
    res.send(result)
  });


})

/**
 * @description api/customers route
 * @method delete
 */
route.delete('/api/customers/:id',(req,res) => {
    //Look for the customer
    //If not exist then return
    const sql = "SELECT * FROM customers WHERE rollno = ?"
    connection.query(sql,[parseInt(req.params.id)],(err,result) => {
        if(result.length === 0) return res.status(404).send("Customer with the given id was not found");
    })

    //delete the record with given id
       connection.query("DELETE FROM customers WHERE rollno = ?", [parseInt(req.params.id)],function (err, result) {
        if (err) throw err;
        console.log("Number of records deleted: " + result.affectedRows);
        res.send(result)
      });
})

function validateCustomer(customer){
    const schema = Joi.object().keys({
        name:Joi.string().min(3).required(),
        age:Joi.number().required(),
        phoneno:Joi.number().required()
    })
    return schema.validate(customer)
}

module.exports = route