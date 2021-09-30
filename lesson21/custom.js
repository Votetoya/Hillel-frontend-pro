var x = 10;

var obj = { x: 15 };



function fun() {

   alert(this.x); 

   alert(this);  

}

fun();          
fun.call(obj);  

///////////////////

var person = {

    firstName:"John",
 
    lastName: "Konor",
 
    fullName: function() {
 
      return this.firstName + " " + this.lastName;
 
    }
    

 }
 
 

 var user = {
 
    firstName:"Max",
 
    lastName: "White",
 
 }

 let xxx = person.fullName.call(user);
console.log(xxx);


////////////////////////////

var tester = function() {
    let b;
    alert(arguments);
    b = Array.from(arguments);
    console.log(b);
 
 };

tester.apply(null, ["0", "1", "2", "length", "callee"]);


tester(["0", "1", "2", "length", "callee"])
