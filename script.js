/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" reikšmė ir "avatar_url" paveiklslėlis (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
const button = document.getElementById('btn');
const result = document.getElementById('output');
const msg = document.getElementById('message');

button.addEventListener('click', () => {
  msg.remove();
  getUsers();
});

function getUsers() {
  fetch(ENDPOINT)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      gen(data);
      console.log(data);
    })
    .catch(function (err) {
      console.log(`error: ${err}`);
    });
}
// fetch(ENDPOINT)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     gen(data);
//     console.log(data);
//   })
//   .catch(function (err) {
//     console.log(`error: ${err}`);
//   });

function createDiv(login, avatar) {
  const createNewDiv = document.createElement('div');
  createNewDiv.innerHTML = `<img src="${avatar}" alt="Avatar image"/>
  <h3>${login}</h3>`;
  createNewDiv.classList.add('div-style');
  createNewDiv.style.width = '40%';
  createNewDiv.style.background = 'DeepSkyBlue';
  createNewDiv.style.display = 'block';
  createNewDiv.style.margin = '0.5rem auto';
  createNewDiv.style.justifyContent = 'Center';
  createNewDiv.style.borderRadius = '20px';
  createNewDiv.style.padding = '0.8rem';
  return createNewDiv;
}

function gen(array) {
  array.forEach((element) => {
    result.append(createDiv(element.login, element.avatar_url));
  });
}
