function generateTeam(data) {
    card = [];

    const createManager = data
    .filter(employee => employee.getRole() === "Manager")
    .map(({ name, id, email, office }) => {
        return `
        <div class="card m-5" style="width: 18rem;">
  <div class="card-body m-5">
    <h5 class="card-title">Manager</h5>
    <h6 class="card-subtitle mb-2 text-muted">${name}</h6>
    <h6 class="card-subtitle mb-2 text-muted">${id}</h6>
    <h6 class="card-subtitle mb-2 text-muted">${office}</h6>
    <a href="mailto:${email}" class="card-link">${email}</a>
  </div>
</div>`
        ;
    })

    card.push(createManager);

    const createEngineer = data
    .filter(employee => employee.getRole() === "Engineer")
    .map(({ name, id, email, github }) => {
        return `
        <div class="card m-5" style="width: 18rem;">
  <div class="card-body m-5">
    <h5 class="card-title">Engineer</h5>
    <h6 class="card-subtitle mb-2 text-muted">${name}</h6>
    <h6 class="card-subtitle mb-2 text-muted">${id}</h6>
    <h6 class="card-subtitle mb-2 text-muted">${github}</h6>
    <a href="mailto:${email}" class="card-link">${email}</a>
  </div>
</div>`
    })
    
    card.push(createEngineer);
    

    const createIntern = data
    .filter(employee => employee.getRole() === "Intern")
    .map(({ name, id, email, school }) => {
        return `
        <div class="card m-5" style="width: 18rem;">
  <div class="card-body m-5">
    <h5 class="card-title">Engineer</h5>
    <h6 class="card-subtitle mb-2 text-muted">${name}</h6>
    <h6 class="card-subtitle mb-2 text-muted">${id}</h6>
    <h6 class="card-subtitle mb-2 text-muted">${school}</h6>
    <a href="mailto:${email}" class="card-link">${email}</a>
  </div>
</div>`
    })

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
    <title>My Developer Team</title>
</head>
<body>
<header>
<nav class="navbar navbar-light bg-primary d-flex justify-content-center pt-5 ">
      <h1 class="mb-5">Developer Team</h1>
    </nav>
</header>
<main>
<div class="container">
        <div class="row">
            <div class="row team-area col-12 d-flex justify-content-center">
                ${generateTeam(data)}
            </div>
        </div>
    </div>
</main>

    
</body>
</html> `
;
};
