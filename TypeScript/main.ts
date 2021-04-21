export {}
let message = "Hii TypeScript";
console.log(message);

let x=10
const y=20

let isBegginer:boolean = true
let total:number=0
let name:string = "Sakshi"
let sentence :string = `I am ${name} and isBeginner is ${isBegginer}`;
console.log(sentence)

let isNew :boolean = null
let myName:string = undefined
let list1:number[] =[1,2,3]
let list2:Array<number> = [1,2,3] 

let person1:[String,Number] = ['Joy',20]

enum Color {Red=5,Green,Blue};
let c:Color = Color.Green;
console.log(c)

let multiType: number | boolean;
multiType = 20
multiType = true