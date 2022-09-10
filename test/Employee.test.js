const Employee = require('../library/Employee');
//an employee has been created
test('employee object',() => {
    const employee = new Employee("Homer Simpson", 1, "hsimpson@springfieldplant.com");
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
});

test('employee name',() => {
    const employee = new Employee("Homer Simpson", 1, "hsimpson@springfieldplant.com");
    expect(employee.getName()).toEqual(expect.any(String));
});

//gets id 
test('employee ID', () => {
    const employee = new Employee("Homer Simpson", 1, "hsimpson@springfieldplant.com");
    expect(employee.getId()).toEqual(expect.any(String));
});


//gets email
test('employee email', () => {
    const employee = new Employee("Homer Simpson", 1, "hsimpson@springfieldplant.com");
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

//gets role 
test('get role', () => {
    const employee = new Employee("Homer Simpson", 1, "hsimpson@springfieldplant.com");
    expect(employee.getRole()).toEqual("Employee");
});

