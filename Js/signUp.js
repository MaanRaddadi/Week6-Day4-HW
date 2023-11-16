let useruserName = document.getElementById("userName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let userNameValid = /^[A-Za-z]{5,}$/;
let mailValid = /^[A-Za-z0-9_\-]+@[A-Za-z0-9_\-]+\.[A-Za-z]{2,4}$/;
let passValid = /^\d{8,}$/;
const errorStyle = "0.5px solid red";

document.getElementById("btn").addEventListener("click", () => {
  if (userName.value === "" || email.value === "" || password.value === "") {
    errorMsg(password, "Please fill out all the fields", errorStyle);
  } else if (email.value != email.value.match(mailValid)) {
    errorMsg(email, "Enter a valid email", errorStyle);
  } else if (password.value != password.value.match(passValid)) {
    errorMsg(password, "Enter a valid password", errorStyle);
  } else if (userName.value != userName.value.match(userNameValid)) {
    errorMsg(userName, "Enter a valid username", errorStyle);
  } else {
    fetch("https://655127797d203ab6626e943b.mockapi.io/users", {
      method: "POST",
      body: JSON.stringify({
        name: userName.value,
        email: email.value,
        password: password.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => (window.location.href = "Login.html"));
  }
});
function errorMsg(elem, msg, border) {
  elem.style.border = border;
  elem.nextElementSibling.innerText = msg;
}
