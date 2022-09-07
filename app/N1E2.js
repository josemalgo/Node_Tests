let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let getEmployee =  async (id) => {

    await timeout(3000);
    let employee = employees.find(emp => emp.id === id);
     
    if(employee){
         return (employee);
    }
    
    throw new Error("No existe un empleado con ese ID!");
}

let getSalary =  (employee) => {

    let salary = salaries.find(sal => sal.id === employee.id);
    
    if(salary){
        return salary.salary;
    }

    throw new Error("No existe un salario para ese empleado.");
}

module.exports = { 
    getEmployee, 
    getSalary,};