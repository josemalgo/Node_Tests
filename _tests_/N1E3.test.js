const N1E3 = require('../app/N1E3');

it('works to async await', async () => {
    expect.assertions(1);
    expect(await N1E3.callFunc()).toBe('Han pasado dos segundos!');
});