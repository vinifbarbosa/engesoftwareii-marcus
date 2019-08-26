const { soma, sub, mult, divi } = require('./soma');


test('Test soma 5+5', () => {
    expect(soma(5, 5)).toBe(10);
});

test('Test soma 500+111', () => {
    expect(soma(500, 111)).toBe(611);
});

test('Test sub 10+5', () => {
    expect(sub(10, 5)).toBe(5);
});

test('Test sub 20-14', () => {
    expect(sub(20, 14)).toBe(6);
});

test('Test mult 2*8', () => {
    expect(mult(2, 8)).toBe(16);
});
test('Test mult 10*10', () => {
    expect(mult(10, 10)).toBe(100);
});

test('Test divi 30/5', () => {
    expect(divi(30, 5)).toBe(6);
});
test('Test divi 400/2', () => {
    expect(divi(400, 2)).toBe(200);
});