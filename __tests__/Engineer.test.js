const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
  const engineer = new Engineer("Jared", 1, "jared@wormhole.com", "jaredGit");

  it("returns employee's github username", () => {
    expect(engineer.getGithub()).toEqual("jaredGit");
  });

  it("returns Employee from role", () => {
    expect(engineer.getRole()).toEqual("Engineer");
  });
});
