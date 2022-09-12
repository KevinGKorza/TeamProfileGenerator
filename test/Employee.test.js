const Employee = require('../library/Employee');
describe("Employee", () => {
    describe("Initialization", () => {
        it("should return an object with the name of, id of, and email of employee", () => {
            const employee = new employee("Homer Simpson", 1, "HSimpson@gmail.com");
            expect (employee.name).toEqual("Homer Simpson");
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual("HSimpson@gmail.com");
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
            const employee = new employee("Homer Simpson", 1, "HSimpson@gmail.com");
            expect(employee.getID()).toEqual(1);
        });
    });
    //the email
    describe("getEmail", () => {
        it("should return the email of the Employee", () => {
            const employee = new employee("Homer Simpson", 1, "HSimpson@gmail.com");
            expect(employee.getEmail()).toEqual("HSimpson@gmail.com");
        });
    });
    //the role
    describe("getRole", () => {
        it("should return the role of the Employee", () => {
            const employee = new employee("Homer Simpson", 1, "HSimpson@gmail.com");
            expect(employee.getRole()).toEqual("Employee");
        });
    });
});
