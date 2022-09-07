const N1E4 = require('../app/N1E4');

it('chaining promises', () => {
    return N1E4.chainingPromises().then(data => {
        expect(data).toBe(4000);
    });
});