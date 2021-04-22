type StringOrNum = string | number
type ObjWithName = {name:string, uid :StringOrNum}
const logDetail = (uid:string | number,item :string) => {
    console.log(`${item} has a ${uid}`)
}

const greet = (user : ObjWithName) => {
    console.log(`${user.name} says hello`)
}
