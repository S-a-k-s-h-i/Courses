const { readFile } = require("fs");
console.log('started first task')

readFile('./content/text.txt','utf8',(err,result) => {
    if(err) return console.log(err)
    console.log(result)
    console.log('completed first task')
})

console.log('started next task')