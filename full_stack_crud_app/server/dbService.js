const mysql = require("mysql");
const dotenv = require("dotenv");
let instance = null
dotenv.config();

const connection = mysql.createConnection({
    host:process.env.HOST,
    user:process.env.USERNAME,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
})
connection.connect((err) => {
    if(err) console.log(err.message)
    else console.log('db '+connection.state)
})

class DbService{
    static getDbServiceInstance(){
      return instance ? instance :new DbService()
    }
    async getAllData(){
        try{
           const response = await new Promise((resolve,reject) => {
               const query ="SELECT * FROM crud;"
               connection.query(query,(err,result) => {
                   if(err) reject(new Error(err.message))
                   resolve(result)
               })
           })
        //    console.log('res',response)
         return response
        }catch(err){
            console.log(err)
        }
    }
    async insertNewData(name){
         try{
            const dateAdded = new Date()
            const insertId = await new Promise((resolve,reject) => {
                const query ="INSERT INTO crud (name,date_added) VALUES (?,?) ;"
                connection.query(query,[name,dateAdded],(err,result) => {
                    if(err) reject(new Error(err.message))
                    resolve(result.insertId)
                })
            })
            // console.log('res',insertId)
            return {
                id:insertId,
                name:name,
                dateAdded:dateAdded
            }
         }catch(err){
             console.log(err.message)
         }
    }

    async deleteById(id){
        id=parseInt(id)
        try{
            const response = await new Promise((resolve,reject) => {
                const query ="DELETE FROM crud WHERE id = ?;"
                connection.query(query,[id],(err,result) => {
                    if(err) reject(new Error(err.message))
                    resolve(result.affectedRows)
                })
            })
            return response === 1? true : false
         }catch(err){
             console.log(err.message);
             return false;
         }
    }
    async editById(id,name){
        try{
            const response = await new Promise((resolve,reject) => {
                const query ="UPDATE crud SET name=?,date_added=? WHERE id =?;"
                connection.query(query,[name, new Date(),id],(err,result) => {
                    if(err) reject(new Error(err.message))
                    resolve(result.affectedRows)
                })
            })
            // console.log(response)
            return response === 1? true : false
         }catch(err){
             console.log(err.message);
             return false;
         }
    }

    async searchByName(name){
        try{
            const response = await new Promise((resolve,reject) => {
                const query ="SELECT * FROM crud WHERE name =?;"
                connection.query(query,[name],(err,result) => {
                    if(err) reject(new Error(err.message))
                    resolve(result)
                })
            })
          return response
         }catch(err){
             console.log(err)
         }
    }
}

module.exports = DbService;