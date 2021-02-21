const Intern = require("../lib/Intern");

describe("Intern class", () => {
  const intern = new Intern("Jared", 1, "jared@wormhole.com", "UC Irvine");

  it("returns intern school", () => {
    expect(intern.getSchool()).toEqual("UC Irvine");
  });

  it("returns Employee from role", () => {
    expect(intern.getRole()).toEqual("Intern");
  });
});