//the importation from the employee constructor
const Employee = require("./Employee");

//Creation of engineer class that includes the name, id, and email
//Creation of constructor

class Engineer extends Employee {
    constructor (name, id, email, github) {
        Employee (name, id, email);
        this.github = github;
    }
    getGithub(){
        return this.github;
    }
    getRole() {
        return "Engineer";
    }

}
module.exports = Engineer;
