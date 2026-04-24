// A callback function is a function that is passed as an argument to another function, and then called later.
// we can able to pass a function as parameter for another function
function success() {
    console.log("Success function called");
}

function failure() {
    console.log("Failure function called");
}

function process(result, onSuccess, onFailure) {
    if (result) {
        onSuccess();   // call first function
    } else {
        onFailure();   // call second function
    }
}

process(true, success, failure);  // Success function called
process(false, success, failure); // Failure function called

// important topic