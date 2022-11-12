import { admin } from "../components/Admin.js";

let ad = document.getElementById("body");
ad.innerHTML = admin();

document.getElementById("submit").addEventListener("click", function (e) {
  let A_nam = document.getElementById("admin_name");
  A_nam.innerHTML = "Devendra Singh <span> Admin</span>";

  alert("Login Success");

  window.location.href = "./Dash-board.html";

  e.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let user_record = JSON.parse(localStorage.getItem("Signup"));
  console.log("user", user_record);

  if (
    user_record.some((v) => {
      return v.email == email && v.password == password;
    })
  ) {
    alert("Login Success");

    window.location.href = "./Dashboard.html";
  } else {
    alert("Please Enter Correct Details");
  }
});
