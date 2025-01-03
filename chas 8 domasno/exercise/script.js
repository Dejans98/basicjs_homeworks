function formSubmit() {
  const firstName = document.getElementById("nameInput").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password");

  const resultString = createString(firstName, lastName, email, password);
  document.getElementById("output").innerText = resultString;
}

function createString(firstName, lastName, email, password) {
  return `First name :${firstName}\n Last name:${lastName}\n Email:${email}\n Password:${password}`;
}
// console.log(formSubmit);
//Ne znam za passwordot dali taka treba da iskaca vo paragrafot
