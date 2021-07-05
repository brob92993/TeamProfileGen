const Manager = require('../lib/Manager');

it ("Can set the office number from the constructor", () => {
    const testValue = 100;
    const e = new Manager("Brian", 1, "test@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

it ("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("Brian", 1, "test@test.com", 100);
    expect(e.getRole()).toBe(testValue);
});

it ("should get office number via getOfficeNumber()", () => {
    const testValue = 100;
    const e = new Manager("Brian", 1, "test@test.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});