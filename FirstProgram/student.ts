export class student{


name:String
age:number

    constructor(name:String, age:number)
    {
        this.name=name;
        this.age=age
    }
    studentDetails() :void
    {
         console.log("The Student name is " +this.name)
         console.log("The Student age is " +this.age)
    }

}
let std1=new student("Jerry", 20)
std1.studentDetails()


//Git -  version controller
//Git hub - store our code in git hub

//
//To Connect to GitHub Account and Upload file/Folder to GitHub

//git config  --global user.name"Ashidhahussain"
//git config --global user.emaill "ashidhaphussain@gmail.com"

//git init- To add Repository - We can add manually from the Github
//git status  - Shows the file/ folder to add to the git

//git add . - To add all file to the Git repository

//git add filename - to add selected files/ required files

//git commit -m "Add content here" - To commit  -(We are giving details about the tasks done today -)

//git remote add origin url - Url will be the Repository url
// 

