const N1E2 = require('../app/N1E2');

it('works with async await', async () => {
    expect.assertions(1);
    const employee = await N1E2.getEmployee(1);
    const salary = N1E2.getSalary(employee);
    expect(salary).toEqual(4000);
});