const Manager = require("../lib/Manager");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  //code goes here
  const testObj = new Manager();
  expect(testObj.getRole()).toBe("Manager")
});

test("Can get office number via getOffice()", () => {
  //code goes here
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.getOffice()).toBe(testValue);
});