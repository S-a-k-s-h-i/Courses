interface Person{
    firstName:string,
    lastName:string
}

function FullName(person:Person){
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName:'Steve',
    lastName:'John'
}

FullName(p)