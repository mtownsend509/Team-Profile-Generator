const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, ID, email, School) {
        super(name, ID, email);
        this.School = School;
        this.role = 'Intern'
    }
    getSchool() {
        return this.School
    }
    getRole() {
        return 'Intern'
    }
};

module.exports = Intern;