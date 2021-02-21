const Manager = require("../lib/Manager");

describe("Manager class", () => {
  const manager = new Manager("Jared", 1, "jared@wormhole.com", 200);

  it("returns manager office number", () => {
    expect(manager.getOfficeNumber()).toEqual(200);
  });

  it("returns Employee from role", () => {
    expect(manager.getRole()).toEqual("Manager");
  });
});