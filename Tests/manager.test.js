const manager = require('../Classes/Manager');

const newManager = new manager('Matt', '12','email@email', "514");

describe("employee class", () => {
    it("should have name, id and email properties that are strings", () => {
        
        expect(typeof newManager.name).toBe("string");
        expect(typeof newManager.ID).toBe("string");
        expect(typeof newManager.email).toBe("string");
        expect(typeof newManager.officeNumber).toBe("string");
    })
});

describe("gets employee's name", () => {
    it ("should return the employee's name", () => {
        expect(newManager.getName()).toBe("Matt");
    })
});

describe("gets employee's ID", () => {
    it ("should return the employee's ID#", () => {
        expect(newManager.getID()).toBe("12");
    })
});

describe("gets employee's email", () => {
    it ("should return the employee's email", () => {
        expect(newManager.getEmail()).toBe("email@email");
    })
});

describe("gets employee's name", () => {
    it ("should return the employee's name", () => {
        expect(newManager.getRole()).toBe("Manager");
    })
});

