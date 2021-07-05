const Employee = require('../lib/Employee')

describe("Employee Class"), () => {
    it("can instatiate to be an object" , () => {
        const e = new Employee();

    expect(typeof (e)).toBe('object');
    
    });
}