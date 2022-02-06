function generateTeam(data) {
    card = [];

    const createManager = data
    .filter(employee => employee.getRole() === "Manager")
    .map(({ name, id, email, office }) => {
        return `
        <div class="card employee-card">
            <div class="card-header bg-primary text-white">
                <h2 class="card-title">${name}</h2>
                <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                    <li class="list-group-item">Office number: ${office}</li>
                </ul>
            </div>
        </div>
                `;
    });

    card.push(createManager);

    const createEngineer = data
    .filter(employee => employee.getRole() === "Engineer")
    .map(({ name, id, email, github }) => {
        return `
        <div class="card employee-card">
            <div class="card-header bg-primary text-white">
                <h2 class="card-title">${name}</h2>
                <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${github}" target="_blank" rel="noopener noreferrer">${github}</a></li>
                </ul>
            </div>
        </div>
                `;
            });
    
    card.push(createEngineer);
    

    const createIntern = data
    .filter(employee => employee.getRole() === "Intern")
    .map(({ name, id, email, school }) => {
        return `
        <div class="card employee-card">
            <div class="card-header bg-primary text-white">
                <h2 class="card-title">${name}</h2>
                <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                    <li class="list-group-item">School: ${school}</li>
                </ul>
            </div>
        </div>
                `;
            });

    card.push(createIntern);

    return card.join('');

}

module.exports = (data) => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
    <title>My Developer Team</title>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading bg-primary">
                <h1 class="text-center text-white">Developer Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="row team-area col-12 d-flex justify-content-center">
                ${generateTeam(data)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};
