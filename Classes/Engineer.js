const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name, ID, email, GitHub) {
        super(name, ID, email);
        this.GitHub = GitHub;
        this.role = 'Engineer';
    }
    getGitHub() {
        return this.GitHub
    }
    getRole() {
        return 'Engineer';
    }
};

module.exports = Engineer;