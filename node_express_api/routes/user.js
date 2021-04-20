const express = require("express")
const router= express.Router();
const { createUser, getAllUser, getUserById, deleteUser, updateUser } =require("../controllers/user.controller")


//get all users
router.get('/',getAllUser)

//create a new user
router.post('/',createUser)

//get a user by id
router.get('/:id',getUserById)

//delete a user by id
router.delete('/:id',deleteUser)

//edit a user by id
router.patch('/:id',updateUser)

module.exports= router;