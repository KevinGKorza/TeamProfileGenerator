//
const Employee = require('../library/Employee');
describe("Employee", () => {
    describe("Initialization", () => {
        it("should return an object with the name of, id of, and email of employee", () => {
            const Employee = new Employee("Homer Simpson", 1, "HSimpson@gmail.com");
            expect (Employee.name).toEqual("Homer Simpson");
            expect(Employee.id).toEqual(1);
            expect(Employee.email).toEqual("HSimpson@gmail.com");
        });
    });
    //the name of the employee
    describe("getName", () => {
        it("should return the name of the Employee", () => {
            const Employee = new Employee("Homer Simpson", 1, "HSimpson@gmail.com");
            expect(Employee.getName()).toEqual("Homer Simpson");
        });
    });
    //the id
    describe("getId", () => {
        it("should return the ID of the Employee", () => {
            const Employee = new Employee("Homer Simpson", 1, "HSimpson@gmail.com");
            expect(Employee.getID()).toEqual(1);
        });
    });
    //the email
    describe("getEmail", () => {
        it("should return the email of the Employee", () => {
            const Employee = new Employee("Homer Simpson", 1, "HSimpson@gmail.com");
            expect(Employee.getEmail()).toEqual("HSimpson@gmail.com");
        });
    });
    //the role
    describe("getRole", () => {
        it("should return the role of the Employee", () => {
            const Employee = new Employee("Homer Simpson", 1, "HSimpson@gmail.com");
            expect(Employee.getRole()).toEqual("Employee");
        });
    });
});
