const Employee = require("../lib/Employee");

describe("Employee class", () => {
  const employee = new Employee("Jared", 1, "jared@wormhole.com");
  it("returns employee name", () => {
    expect(employee.getName()).toEqual("Jared");
  });

  it("returns employee ID number", () => {
    expect(employee.getID()).toEqual(1);
  });

  it("returns employee email address", () => {
    expect(employee.getEmail()).toEqual("jared@wormhole.com");
  });

  it("returns Employee from role", () => {
    expect(employee.getRole()).toEqual("Employee");
  });
});
