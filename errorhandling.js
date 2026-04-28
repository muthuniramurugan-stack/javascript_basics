/*Error handling is used to handle errors without stopping the program.
Normally, if an error happens, program stops.
With error handling:
 we can catch the error and continue. */
let a = undefined;
try{ // risky code which causes error
    console.log(a.name)
}
catch(error){
    // handle error
    console.log("Error has occured");
    throw new error("New error"); //to create our own error manually.
    throw new TypeError();//when the error is related to a wrong datatype or wrong type of value.TypeError is a built-in error type in JavaScript.
    
}