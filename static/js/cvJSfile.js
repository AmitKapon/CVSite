function applyStyles(element) {
  element.style.backgroundColor = 'red';
  element.style.fontSize = '50px'


}

function revertStyles(element) {
  element.style.backgroundColor = 'white';
  element.style.fontSize = '15px'
}

function HideShow(objID) {
  var x = document.getElementById(objID);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

fetch('https://reqres.in/api/users?page=2').then(
    response => response.json()
).then(
    responseJSON => createUsersList(responseJSON.data)
).catch(err => console.log(err));

function createUsersList(users) {
    console.log(users);
    const user = users[0];
    console.log(user);
    const curr_main = document.querySelector("main");
    for (let user of users) {
        const section = document.createElement('section');
        section.innerHTML = `
            <img src="${user.avatar}" alt="Profile_Avatar"/>
            <div>
            <span>${user.first_name} ${user.last_name}</span><br>
            <a href="mailto:${user.email}">Send Email</a>
            </div>`;
    curr_main.appendChild(section);
    }
}

function actionToggle() {
  const action = document.querySelector('.action');
  action.classList.toggle('active')
}