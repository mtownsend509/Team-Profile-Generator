const engineer = require('../Classes/Engineer');

const newEngineer = new engineer('Matt', '12','email@email', 'mtownsend509');

describe("employee class", () => {
    it("should have name, id and email properties that are strings", () => {
        
        expect(typeof newEngineer.name).toBe("string");
        expect(typeof newEngineer.ID).toBe("string");
        expect(typeof newEngineer.email).toBe("string");
        expect(typeof newEngineer.GitHub).toBe("string");

    })
});

describe("gets employee's name", () => {
    it ("should return the employee's name", () => {
        expect(newEngineer.getName()).toBe("Matt");
    })
});

describe("gets employee's ID", () => {
    it ("should return the employee's ID#", () => {
        expect(newEngineer.getID()).toBe("12");
    })
});

describe("gets employee's email", () => {
    it ("should return the employee's email", () => {
        expect(newEngineer.getEmail()).toBe("email@email");
    })
});

describe("gets employee's role", () => {
    it ("should return the employee's role", () => {
        expect(newEngineer.getRole()).toBe("Engineer");
    })
});

describe("gets employee's GitHub", () => {
    it ("should return the employee's GitHub", () => {
        expect(newEngineer.getGitHub()).toBe("mtownsend509");
    })
});