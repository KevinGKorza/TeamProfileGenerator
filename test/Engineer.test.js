//using Engineer constructor
const Engineer = require("../library/Engineer");
describe("Engineer", () => {
    describe("Initialization", () => {
        it("should return an object with the name of, id of, email of, and github account of the engineer", () => {
            const engineer = new Engineer("Lenny Leonard", 4, "LLeonard@gmail.com", "LennyIzKool");
            expect(engineer.name).toEqual("Lenny Leonard");
            expect(engineer.id).toEqual(4);
            expect(engineer.email).toEqual("LLeonard@gmail.com");
            expect(engineer.github).toEqual("LennyIzKool");
        });
    });
    //github
    describe("getGithub", () => {
        it("should return the Engineer's GitHub account", () => {
            const engineer = new Engineer("Lenny Leonard", 4, "LLeonard@gmail.com", "LennyIzKool");
            expect(engineer.getGithub()).toEqual("LennyIzKool");
        });
    });
    //the role
    describe("getRole", () => {
        it("should return the Engineer's role", () => {
            const engineer = new Engineer("Lenny Leonard", 4, "LLeonard@gmail.com", "LennyIzKool");
            expect(engineer.getRole()).toEqual("Engineer");
        });
    });

});
