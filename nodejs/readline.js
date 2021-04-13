const readLine = require('readline');
const rl = readLine.createInterface({ input : process.stdin,
                                      output : process.stdout});
const num1 = Math.floor((Math.random()*10) + 1);
const num2 = Math.floor((Math.random()*10) + 1);
const answer = num1 + num2

rl.question(`What is ${num1} + ${num2} ? \n`,(userInput) => {
    if(userInput.trim() == answer){
        rl.close();
    }else{
        rl.setPrompt('incorrect response \n');
        rl.prompt()
        //triggering the line event whenever user enter any input so we will get a loop
        rl.on('line',(userInput) => {
            if(userInput.trim() == answer)
               rl.close();
            else{
                rl.setPrompt(`your answer ${userInput} is incorrect \n`)
                rl.prompt()
            }
        })
    }

});
//whenever close event is triggered
rl.on('close',() => {
    console.log('Correct!!!!!')
})

