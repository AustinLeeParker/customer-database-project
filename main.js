
// for (i = 0; i < 3; i++) {

//     for (x = 0; i < 4; i++) {

//     }
//     for (x = 0; i < 4; i++) {

//     }
// }
let container = document.querySelector(".container");
for (let i = 0; i < customers.results.length; i++) {
    let content =
        `<div class="content">
            <img class="img" src=${customers.results[i].picture.large}>
                <h2>${customers.results[i].name.first} ${customers.results[i].name.last}</h2>
                <hr>
                <p>${customers.results[i].email}</p>
                <br>
                <p>${customers.results[i].location.street}</p>
                <p>${customers.results[i].location.city} ${customers.results[i].location.state} ${customers.results[i].location.postcode}</p>
                <p>${customers.results[i].cell}</p>
                <br>
                <p class ="social">${customers.results[i].id.value}</p>
        </div>`;
    container.innerHTML += content;
}



//   <img class="img" src="https://randomuser.me/api/portraits/med/men/0.jpg">
//     <h2> John Doe</h2>
//     <hr>
//     <p>Johndoe@mail.com</p>
//     <p>12345 Street Address</p>
//     <p> Cool City,GA 303030</p>
//     <p>555-555-5555</p>
//     <p class="social">123-45-6789</p>