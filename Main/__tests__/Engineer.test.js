const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  //code goes here
  const testValue = new Engineer("name",3,"test","githubUser");
  expect(testValue.github).toBe("githubUser")
});

test("getRole() should return \"Engineer\"", () => {
  //code goes here
  const testValue = new Engineer();
  expect(testValue.getRole()).toBe("Engineer")
});

test("Can get GitHub username via getGithub()", () => {
  //code goes here
  const testValue = new Engineer("name",3,"test","githubUser");
  expect(testValue.getGithub()).toBe("githubUser")
});
