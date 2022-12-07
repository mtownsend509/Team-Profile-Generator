const intern = require('../Classes/Intern');

const newIntern = new intern('Matt', '12','email@email', 'UW');

describe("employee class", () => {
    it("should have name, id and email properties that are strings", () => {
        
        expect(typeof newIntern.name).toBe("string");
        expect(typeof newIntern.ID).toBe("string");
        expect(typeof newIntern.email).toBe("string");
        expect(typeof newIntern.School).toBe("string");

    })
});

describe("gets employee's name", () => {
    it ("should return the employee's name", () => {
        expect(newIntern.getName()).toBe("Matt");
    })
});

describe("gets employee's ID", () => {
    it ("should return the employee's ID#", () => {
        expect(newIntern.getID()).toBe("12");
    })
});

describe("gets employee's email", () => {
    it ("should return the employee's email", () => {
        expect(newIntern.getEmail()).toBe("email@email");
    })
});

describe("gets employee's role", () => {
    it ("should return the employee's role", () => {
        expect(newIntern.getRole()).toBe("Intern");
    })
});

describe("gets employee's school", () => {
    it ("should return the employee's school", () => {
        expect(newIntern.getSchool()).toBe("UW");
    })
});