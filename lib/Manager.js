// In addition to Employee's properties and methods, Manager will also have the following:
// officeNumber
// getRole()—overridden to return 'Manager'

const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }

  getCardContent() {
    let employeeContent = super.getCardContent();
    employeeContent += `<p class="card-text">Office Number: ${this.getOfficeNumber()}</p>`;

    return employeeContent;
  }
}

module.exports = Manager;
