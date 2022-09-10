//using Engineer constructor
const Engineer = require("../library/Engineer");

//creating onject for engineer
test("an object for your engineer has been created", () => {
    const engineer = new Engineer("Lenny Leonard", 3, "LLeonard@springfieldplant.com");
    expect(engineer.github).toEqual(expect.any(String));
});

//gets github from getGitHub()
test("your engineer github", () => {
    const engineer = new Engineer("Lenny Leonard", 3, "LLeonard@springfieldplant.com", "LennyIsotopes#1");
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

//gets role from get Role()
test("this is your role", () => {
    const engineer = new Engineer("Lenny Leonard", 3, "LLeonard@springfieldplant.com", "LennyIsotopes#1");
    expect(engineer.getRole()).toEqual("Engineer");
});
