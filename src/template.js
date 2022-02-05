function generateTeam(data) {
    card = [];

    const createManager = data
    .filter(employee => employee.getRole() === "Manager")
    .map(({ name, id, email, office }) => {
        return `
        <div class="container d-flex justify-content-center">
        <div class="row">
            <div class="col-3 ">
                <div class="card m-2" style="width: 18rem;">
                    <div class="card-body">
                      <h4 class="card-title">${name}</h4>
                      <h5 class="card-subtitle">${id}</h5>
                      <h5 class="card-subtitle mb-2 text-muted">${email}</h5>
                      <h5 class="card-subtitle mb-2 text-muted">${office}</h5>
                      
                    </div>
                  </div>
            </div>
          </div>
    </div>
        `;
    })

    card.push(createManager);

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
