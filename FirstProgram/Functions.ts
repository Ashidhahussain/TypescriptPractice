// FUnctions - it is block of code that perform a specific task
// can be used multiple times in a program


//function with No parameter and no return type
function myfunction() :void //void represent no return 
{
    console.log("Hai")
}
myfunction()

//function with parameter and No return type

function student(name:String, age:number)
{
    console.log("The name is " + name + " and Age is " + age)
}
student("Jerry",20)

//function with parameter and return type

function add(a:number,b:number) :number // return type is number
{
    return a+b
}
let result:number=add(10,20)
console.log("The Sums is " +result)