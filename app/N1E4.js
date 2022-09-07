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

let getEmployee = (num) => {
    
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            
            let employee = employees.find(emp => emp.id === num);

            if (employee){
                resolve(employee);
            }
            reject(new Error(`No existe ningún empleado con el id ${num}`));
        
        }, 1000);
    });
}

let getSalary = (employee) => {

    return new Promise((resolve, reject) => {
        
        setTimeout(() => {

            let salary = salaries.find(sal => sal.id === employee.id);
    
            if(salary){
                resolve(salary.salary);
            }
    
            reject(new Error("No existe un salario para ese empleado."));

        } , 1000);
    });
}

let chainingPromises = () => {
    
    return getEmployee(1)
        .then((employee) => {
            return getSalary(employee)
        })
        .then((salary) => {
            return salary;
        });
}

module.exports = {
    chainingPromises
};
