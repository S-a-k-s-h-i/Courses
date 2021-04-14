//when 
$(document).ready(() => {
    //get a form and then add a submit handler to our form 
    //submit handler will take a callback function 
    //whch has an event e as a parameter , we will prevent default submission
    // here we use ajax to make a post request
    //post json data back to the server
    $('#form').submit((e) => {
        e.preventDefault();
        console.log(JSON.stringify($('#form').serializeArray()))
        $.ajax({
            url:'/',
            type:'post',
            contentType:'application/json',
            //actual form data we pass in 
            //we get the form data and then serialize the array so we will get the array
            //but we want to send  json data so we wrap it in JSON.stringify
            data : JSON.stringify($('#form').serializeArray()),
            //success is invoked when we have success response from server
            success:(response) => {
                console.log('successfully got response');
                console.log(response);
            }})
    })
})