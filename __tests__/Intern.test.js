const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Tobby', 24, 'tbrooks321@yahoo.com', 'UOP');

    expect(intern.school).toEqual(expect.any(String));
});

test('gets the name of the shcool', () => {
    const intern = new Intern('Tobby', 24, 'tbrooks321@yahoo.com', 'UOP');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
})

test('gets the role of intern', () => {
    const intern = new Intern('Tobby', 24, 'tbrooks321@yahoo.com', 'UOP');

    expect(intern.getRole()).toBe("Intern");
})