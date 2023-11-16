let welcomMsg = document.getElementById("welcomeMsg");
checkUser();
function checkUser() {
  if (localStorage.getItem("user") === null) {
    window.location.href = "login.html";
  } else {
    let user = localStorage.getItem("user");
    welcomMsg.innerHTML = `Welcome, ${user}`;
  }
}

// CKEDITOR
CKEDITOR.replace("textarea");
const addBtn = document.getElementById("addBtn");
const deletBtn = document.getElementById("deleteBtn");
const drawingContainer = document.querySelector(".drawing-container");
addBtn.addEventListener("click", () => {
  let texterea = CKEDITOR.instances.textarea.getData();

  drawingContainer.insertAdjacentHTML("afterbegin", texterea);
});

deletBtn.addEventListener("click", () => {
  drawingContainer.innerHTML = "";
});
