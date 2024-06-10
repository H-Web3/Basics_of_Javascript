function addition (numone, numtwo) //"function"is a keyword to write functions
{
    var result = numone + numtwo;
    console.log(result);
}
addition(5,25); //calling fuction while writing parameters

/* ********************** */

//write function in different manner

function subtraction(num1, num2)
{
    return num1 - num2; //"return statement will stop the function and return the value"  
}
console.log(subtraction(25, 5))