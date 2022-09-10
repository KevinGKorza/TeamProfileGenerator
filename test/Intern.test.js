//Intern constructor
const Intern = require('../library/Intern');

//Intern object
test("an object has been created for Intern", () => {
    const intern = new Intern("Frank Grimes", 4, "FGrimes@springfieldplant.com", "University of Springfield");
    expect(intern.school).toEqual(expect.any(String));
});

//gets school from getSchool()
test("gets intern school", () => {
    const intern = new Intern("Frank Grimes", 4, "FGrimes@springfieldplant.com", "University of Springfield");
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

//gets role from getRole()
test("gets role of the intern", () => {
    const intern = new Intern("Frank Grimes", 4, "FGrimes@springfieldplant.com", "University of Springfield");
    expect(intern.getRole()).toEqual("Intern");
});
