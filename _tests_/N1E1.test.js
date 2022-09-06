const N1E1 = require('../app/N1E1');

describe('Sumar', () => {
    test('1 + 2 to equal 3', () => {
        expect(N1E1.sumar(1,2)).toBe(3);
    });

    test('1 + 2 + 3 + 4 to equal 10', () => {
        expect(N1E1.sumar(1,2,3,4)).toBe(10);
    });    
});


test('restar 4 - 2 to equal 2', () => {
    expect(N1E1.restar(4,2)).toBe(2);
});

test('restar 4 - 2 - 2 to equal 0', () => {
    expect(N1E1.restar(4,2,2)).toBe(0);
});


test('Mult 1 * 2 to equal 2', () => {
    expect(N1E1.multiplicar(1,2)).toBe(2);
});

test('Mult 1 * 2 * 10 to equal 20', () => {
    expect(N1E1.multiplicar(1,2,10)).toBe(20);
});


test('Dividir 100 / 2 to equal 50', () => {
    expect(N1E1.dividir(100,2)).toBe(50);
});

test('Dividir 100 / 2 / 2 to equal 25', () => {
    expect(N1E1.dividir(100,2,2)).toBe(25);
});