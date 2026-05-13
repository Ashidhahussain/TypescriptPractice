export class student {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    studentDetails() {
        console.log("The Student name is " + this.name);
        console.log("The Student age is " + this.age);
    }
}
let std1 = new student("Jerry", 20);
std1.studentDetails();
