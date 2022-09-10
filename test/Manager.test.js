//Manager constructor
const Manager = require('../library/Manager');
//manager object
test("your manager has been created", () => {
    const manager = new Manager("Carl Carlson", 2, "CCarlson@springfieldplant.com", 26);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

//gets role from getRole()
test("your role of employee", () => {
    const manager = new Manager("Carl Carlson", 2, "CCarlson@springfieldplant.com");
    expect(manager.getRole()).toEqual("Manager");
});
