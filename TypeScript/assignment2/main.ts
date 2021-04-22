export{}
function doSomething(){
    for(var i=0; i<5; i++){
        console.log(i)
    }
    console.log("Finally")
}

doSomething()

let message;
message ='abc'
let endsWithC = (<string>message).endsWith('c')
//or
let alternativeWay = (message as string).endsWith('c')