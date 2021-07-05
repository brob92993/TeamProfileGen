const Intern = require('../lib/Intern');

it ("can set school via the constructor", () => {
    const testValue = "UNCC";
    const e = new Intern("Brian", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
});

it ("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Brian", 1, "test@test.com", "UNCC");
    expect(e.getRole()).toBe(testValue);
});

it ("gets school from getSchool()", () => {
    const testValue = "UNCC";
    const e = new Intern("Brian", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});