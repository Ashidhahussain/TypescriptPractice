"use strict";
//function with No parameter and no return type
function myfunction() {
    console.log("Hai");
}
myfunction();
//function with parameter and No return type
function student(name, age) {
    console.log("The name is " + name + " and Age is " + age);
}
student("Jerry", 20);
//function with parameter and return type
function add(a, b) {
    return a + b;
}
let result = add(10, 20);
console.log("The Sums is " + result);
