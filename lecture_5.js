//constructor functions used to create multiple objects

function studentData (fname, lName, age) //starting syntax same as simple functions
{
    /*no need to write the var keyword, because constructor function already know that it will only 
    create objects.*/

    this.fname = fname,
    this.lName = lName,
    this.age = age,

    this.getfullname = function()
    {
        return this.fname + " " + this.lName;
    }
    //in construc func no need to return the function because there is already builtin return function
}

var student1 = new studentData('saad', 'ali', 25);
console.log(student1);

//creating another construc func

function user (name, email){
    this.name = name,
    this.email = email,
    
    this.login = function(){
        return this.email + " " + ': User is logged in';
    }
}

/*sometimes, there is need to create another property or method from outside the construc func, for
that we use prototype function*/

user.prototype.logout = function()
{
    return this.email + " " + ': User is now logged out';
}
var user1 = new user('asad', 'abc12@gmail.com');
console.log(user1.logout());