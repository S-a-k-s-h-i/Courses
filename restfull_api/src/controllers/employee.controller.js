const employeeModel = require("../models/employee.model")

//get all employees
exports.getEmployeeList = (req,res) => {
    console.log(req.url)
    // console.log('get all employess');
    employeeModel.getAllEmployees((err,employees) => {
        if(err) res.send(err)
        else res.send(employees)
    })
}

//get employee by id
exports.getEmployeeById = (req,res) => {
    employeeModel.getEmployeeById(req.params.id,(err,employee) => {
        if(err) res.send(err)
        else res.send(employee)
    })
}

//create new employee
exports.createNewEmployee = (req,res) => {
    employeeModel.createEmployee(data,(err,employee) => {
        if(err) res.json({status:false,message:'something went wrong',data:data})
        else  res.json({status:true,message:'inserted successfully',data:data})
    })
}

//update employee
exports.updateEmployee = (req,res) => {
    const data = req.body;
    employeeModel.updateEmployee(req.params.id,data,(err,employee) => {
        if(err) res.json({status:false,message:'something went wrong',data:data})
        else  res.json({status:true,message:'updated successfully',data:data})
    })
}

//delete employee
exports.deleteEmployee = (req,res) => {
    employeeModel.deleteEmployeeById(req.params.id,(err,employee) => {
        if(err) res.json({status:false,message:'something went wrong'})
        else res.json({status:true,message:'deleted successfully'})
    })

}