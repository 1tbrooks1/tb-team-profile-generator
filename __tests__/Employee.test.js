const Employee = require('../lib/Employee')

test('creates an employee object', () => {
    const employee = new Employee('Tobby', 24, 'tbrooks321@yahoo.com')

    expect(employee.name).toBe('Tobby');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('tbrooks321@yahoo.com');
});

test('get name of employee', () => {
    const employee = new Employee('Tobby', 24, 'tbrooks321@yahoo.com')

    expect(employee.getName()).toEqual(expect.any(String));
})

test('get id number of employee', () => {
    const employee = new Employee('Tobby', 24, 'tbrooks321@yahoo.com')

    expect(employee.getId()).toEqual(expect.any(Number));
})

test('gets the email of the employee', () => {
    const employee = new Employee('Tobby', 24, 'tbrooks321@yahoo.com')

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
})

test('gets the role of the employee', () => {
    const employee = new Employee('Tobby', 24, 'tbrooks321@yahoo.com')

    expect(employee.getRole()).toEqual("Employee");
})