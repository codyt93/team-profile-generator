// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee=reqire("./Employee.js")
class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name,id,email,)
        this.github=github
    }
    getgithub(){
        return this.github
    }
    getRole() {
        return "Engineer"
    }
  
    
}
module.exports=Engineer