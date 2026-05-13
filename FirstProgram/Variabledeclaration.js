"use strict";
// In Typescript we have to mention the datatype of variables.
//Modern js use let and const instead of var
// we can not redeclaire the value in otherbecause of Type safety
let n = "Tom"; //Type safety - Declare the datatype 
let age = 20;
let isStudent = true;
let c = "Hello"; //we can not redeclaire the value in other type if its alreday decalred.
//  because of Type safety, C declared in string , so it should only declare in
// String and can't change the datatype
c = "12";
const pi = 3.14;
var v = "Jerry";
console.log(n);
console.log(age);
console.log(isStudent);
console.log(c);
console.log(pi);
console.log(v);
