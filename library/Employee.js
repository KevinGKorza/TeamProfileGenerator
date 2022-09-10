//Creation of employee class that includes the name, id, and email
//Creation of constructor

class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.name;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return 'Employee';
    }
};

module.exports = Employee
