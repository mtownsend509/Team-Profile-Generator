const employee = require('../Classes/Employee');

const newEmployee = new employee('Matt', '12','email@email');

describe("employee class", () => {
    it("should have name, id and email properties that are strings", () => {
        
        expect(typeof newEmployee.name).toBe("string");
        expect(typeof newEmployee.ID).toBe("string");
        expect(typeof newEmployee.email).toBe("string");
    })
});

describe("gets employee's name", () => {
    it ("should return the employee's name", () => {
        expect(newEmployee.getName()).toBe("Matt");
    })
});

describe("gets employee's ID", () => {
    it ("should return the employee's ID #", () => {
        expect(newEmployee.getID()).toBe("12");
    })
});

describe("gets employee's email", () => {
    it ("should return the employee's email", () => {
        expect(newEmployee.getEmail()).toBe("email@email");
    })
});
