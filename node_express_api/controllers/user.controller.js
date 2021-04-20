const { v4: uuidv4 } = require('uuid');

var users = []

//create a new user
module.exports.createUser = (req,res) => {
    const user =req.body;
    const userId =uuidv4();
    const userWithId = {...user,id:userId}
    users.push(userWithId)
    res.send({status:true,message:'added successfully'})
}
//get all users
module.exports.getAllUser = (req,res) => {
    res.send(users)
}
//get a user by id
module.exports.getUserById = (req,res) => {
    const user = users.find(user => user.id === req.params.id)
    res.send(user)
}
//delete a user by id
module.exports.deleteUser = (req,res) => {
    //look for user
    //if not exist return
    const userExist = users.find(user => user.id === req.params.id)
    if(userExist){
        users = users.filter(user => user.id !== req.params.id)
        return res.send({status:true,message:'deleted successfully'})
    }else{
        return res.send({status:false,message:'user does not exist with given id'})
    }
}
//edit a user by id
module.exports.updateUser = (req,res) => {
    const { firstname,lastname,age} = req.body
    //look for user
    //if not exist return
    const userExist = users.find(user => user.id === req.params.id)
    if(!userExist) return res.send({status:false,message:'user does not exist with given id'})

    //update the user
    const user = users.find(user => user.id === req.params.id);
    if(firstname) user.firstname = firstname;
    if(lastname) user.lastname = lastname;
    if(age) user.age = age;
    
    res.send({status:true,message:'updated successfully'})
}