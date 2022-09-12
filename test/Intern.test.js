//Intern constructor
const Intern = require('../library/Intern');
describe("Intern", () => {
    describe("Initialization", () => {
        it("should return an object with the name of, id of, email of, and University of the Intern", ()=> {
            const intern = new Intern("Frank Grimes", 0, "FGrimes@gmail.com", "Springfield U");
            expect(intern.name).toEqual("Frank Grimes");
            expect(intern.id).toEqual(0);
            expect(intern.email).toEqual("FGrimes@gmail.com");
            expect(intern.school).toEqual("Springfield U");
        });
    });
    
})
