const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Tobby', 24, 'tbrooks321@yahoo.com', '1tbrooks1');

    expect(engineer.gitHub) .toEqual(expect.any(String));
});

test('gets the GitHub username of engineer', () => {
    const engineer = new Engineer('Tobby', 24, 'tbrooks321@yahoo.com', '1tbrooks1');

    expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.gitHub.toString()));
});

test('gets role of employee', () => {
    const engineer = new Engineer('Tobby', 24, 'tbrooks321@yahoo.com', '1tbrooks1');

    expect(engineer.getRole()).toEqual("Engineer");
})