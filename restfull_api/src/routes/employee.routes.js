const express = require("express");
const router = express.Router()

const employeeController = require('../controllers/employee.controller')

//get all employess
router.get('/',employeeController.getEmployeeList);

//get employye by id
router.get('/:id',employeeController.getEmployeeById);

//create new employee
router.post('/',employeeController.createNewEmployee);

//update an employee
router.put('/:id',employeeController.updateEmployee);

//delete employee by id
router.delete('/:id',employeeController.deleteEmployee)

module.exports = router