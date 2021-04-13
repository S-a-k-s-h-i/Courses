const fs = require('fs')
const { fileURLToPath } = require('url')

//creating a folder
// fs.mkdir('courses', (err) => {
//     err?console.log(err):console.log('folder successfully created')
// })

//deleting a folder
// fs.rmdir('courses',(err) => {
//     err?console.log(err):console.log('folder successfully deleted')
// })fs.mkdir('courses', (err) => {
//     err?console.log(err):console.log('folder successfully created')
// })

// fs.mkdir('newFolder',(err) => {
//     err?console.log(err):
//     console.log('folder created successfully')
//     fs.writeFile('./newFolder/firstFile','file inside folder',(err) => {
//         err?console.log(err):console.log('file created successfully')
//     })
// })

//deleting file
// fs.unlink('./newFolder/newFile',(err) => {
//     err?console.log(err):
//     console.log('file successfully deleted')
//     //deleting a folder
//     fs.rmdir('newFolder',(err) => { 
//     err?console.log(err):console.log('folder successfully deleted')
//      })
// })




//create a file
// fs.writeFile('example.txt',"this is a example",(err) => {
//     err?console.log(err):
//     console.log('file successfully created')
//     //reading file
//     fs.readFile('example.txt','utf8',(err,data) => {
//         err?console.log(err):console.log(data)
//     })
// })

// //Renaming file
// fs.rename('example.txt',"renamed.txt",(err) => {
//     err?console.log(err):console.log('successfully renamed')
// })

// //Append data to file
// fs.appendFile('renamed.txt','some data appended',(err) =>{
//     err?console.log(err):console.log('successfully appended data')
// })

//deleting a file
// fs.unlink('renamed.txt',(err) => {
//     err?console.log(err):console.log('successfully deleted')
// })

fs.readdir('newFolder',(err,files) => {
    err?console.log(err):
    files.forEach(file => fs.unlink('./newFolder/'+file,(err) => {
        err?console.log(err):console.log(`${file} successfully deleted `)
    }))   
})

