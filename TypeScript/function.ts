export {}
function add(number1:number,number2:number=10):number{
    if(number2)
       return number1+number2
    else
       return number1
}
add(5,10)
add(5)

function FullName(person:{firstName:string, lastName:string}){
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName:'Steve',
    lastName:'John'
}

FullName(p)
