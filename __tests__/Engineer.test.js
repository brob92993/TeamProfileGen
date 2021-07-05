const Engineer = require('../lib/Engineer');


it("Can set the Github account via the constructor", () => {
    const testValue = "GithubUser";
    const e = new Engineer("Brian", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
});

it("getRole() should return \"Engineer\"", ()=> {
    const testValue = "Engineer";
    const e = new Engineer("Brian", 1, "test@test.com", "GithubUser");
    expect(e.getRole()).toBe(testValue);
})

it("can get the Github username from getGithub()", () =>{
    const testValue = "GithubUser";
    const e = new Engineer ("Brian", 1, "test@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
})