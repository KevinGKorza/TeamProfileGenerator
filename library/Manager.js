//Employee constructor
const Employee = require('./Employee');

//Creation of Manager class that includes the name, id, and email
//Creation of constructor
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        Employee (name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;
