//object datatype

var student1 = {
    fname : "M.",
    lName : "Huzaifa",
    age : 25,
};
console.log(student1.fname);

/* in objects, we not only store properties in it, we can also
write functions in it, which will called methods.*/

var student2 = {
    fname : "M.",
    lName : "Huzaifa",
    age : 25,

    getfullname : function() //write funtion in object data type, also called methods
    {
        return this.fname + " " + this.lName;
    }
};

console.log(student2.getfullname());

//writing an object data type in a function

function studentRecord (fname, lname, age)
{
    var student = {
        fname : fname,
        lname : lname,
        age : age
    }
    return student;
}

var student1 = studentRecord("m.", "huzaifa", 25);//calling and storing the function in student variable
console.log(student1);