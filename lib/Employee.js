// The first class is an Employee parent class with the following properties and methods:
// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole()—returns 'Employee'

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getID() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }

  getCardContent() {
    const content = `  <h5 class="card-title">${this.getName()}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${this.getRole()}</h6>
    <p class="card-text">ID: ${this.getID()}</p>
    <a href="mailto:${this.getEmail()}" class="card-link">Email: ${this.getEmail()}</a>
  `;
    return content;
  }
}

module.exports = Employee;
