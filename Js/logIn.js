document.getElementById("btn").addEventListener("click", () => {
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  const errorStyle = "0.5px solid red";
  localStorage.clear();
  fetch("https://655127797d203ab6626e943b.mockapi.io/users")
    .then((response) => response.json())
    .then((data) => {
      if (email.value === "" || password.value === "") {
        errorMsg(email, "Please fill out all the fields", errorStyle);
      } else {
        let findUser = data.find(
          (d) => d.email === email.value && d.password === password.value
        );
        console.log(findUser);
        if (!findUser) {
          errorMsg(
            document.getElementById("btn"),
            "User not found",
            errorStyle
          );
        } else if (password.value !== findUser.password) {
          errorMsg(password, "Wrong password", errorStyle);
        } else {
          localStorage.clear();
          localStorage.setItem("user", findUser.name);
          window.location.href = "blog.html";
        }
      }
    });
});
function errorMsg(elem, msg, border) {
  elem.style.border = border;
  elem.nextElementSibling.innerText = msg;
}
