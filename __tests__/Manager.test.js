const Manager = require('../lib/Manager');

test('creates an object for manager', () => {
    const manager = new Manager('Tobby', 24, 'tbrooks321@yahoo.com', 23);

    expect(manager.office).toEqual(expect.any(Number));
});

test('gets the role of manager', () => {
    const manager = new Manager('Tobby', 24, 'tbrooks321@yahoo.com', 23);

    expect(manager.getRole()).toEqual("Manager");
})

