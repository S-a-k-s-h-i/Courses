const dbConn = require('../../config/db.config');

//get all employees
module.exports.getAllEmployees = (result) => {
    dbConn.query("SELECT * FROM employees", function (err, res) {
      if(err){
          console.log('error while fetching record',err);
          result(null,err)
      }else{
        console.log('successfully fetched record',res);
        result(null,res)
      }
    });
}

//get an employee by id
module.exports.getEmployeeById = (id,result) => {
    dbConn.query("SELECT * FROM employees WHERE id = ?",id, function (err, res) {
        if(err){
            console.log('error while fetching record by id',err);
            result(null,err)
        }else{
          console.log('successfully fetched record by id',res);
          result(null,res)
        }
      });
}

//create new employee
module.exports.createEmployee = (employeeData,result) => {
  dbConn.query("INSERT INTO employees SET ?", employeeData,function (err, res) {
    if(err){
        console.log('error while inserting record',err);
        result(null,err)
    }else{
      console.log('successfully inserted record',res);
      result(null,result)
    }
  });
}

//update employee
module.exports.updateEmployee=(empId,empData,result) => {
  dbConn.query("UPDATE employees SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=?,status=? WHERE id=?",
   [empData.first_name,empData.last_name,empData.email,empData.phone,empData.organization,empData.designation,empData.salary,empData.status,empId],function (err, res) {
    if(err){
        console.log('error while updating record',err);
        result(null,err)
    }else{
      console.log('successfully updated record',res);
      result(null,res)
    }
  });
}

//delete an employee
module.exports.deleteEmployeeById = (id,result) => {
  dbConn.query("DELETE FROM employees WHERE id = ?",id, function (err, res) {
      if(err){
          console.log('error while deleting record by id',err);
          result(null,err)
      }else{
        console.log('successfully delete record by id',res);
        result(null,res)
      }
    });
}
