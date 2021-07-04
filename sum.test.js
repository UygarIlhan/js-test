const sum = require('./sum')

test("should calculate the sum of two variables", () =>{
    expect(sum(1,1)).toBe(2);
})

