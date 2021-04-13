const EventEmitter = require('events')
//EventEmitter is a class and now we will create an instance of this class
const emitter = new EventEmitter();
//Attaching a listener
emitter.on('messageLogged',(num1,num2) => {
    //executing a function when messageLogged event occurrs
    console.log(num1+num2)
}) 

//Raising event
emitter.emit('messageLogged',3,5)

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name
    }
    get name(){
        return this._name
    }
}

let brown = new Person('brown')
let bella =new Person('bella')
brown.on('name',() => {
    console.log('my name is '+brown.name);
})
bella.on('name',() => {
    console.log('my name is '+bella.name)
})
brown.emit('name')
bella.emit('name')