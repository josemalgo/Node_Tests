jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

test('waits 2 secons for ending the function', () => {
    const N1E5 = require('../app/N1E5.js');
    N1E5.callFunc();

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
});