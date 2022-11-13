document.getElementById("submit").addEventListener("click", function (e) {
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

    //    let current_user = user_record.filter((v) =>{
    //     return v.email == email && v.password == password;

    //    })[0];

    //    localStorage.setItem("name", current_user.name);
    //    window.location.href = "index.html";
  } else {
    alert("Login Failed");
  }
});

document.getElementById("submit").addEventListener("click", function (e) {
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

    let current_user = user_record.filter((v) => {
      return v.email == email && v.password == password;
    })[0];

    localStorage.setItem("name", current_user.name);
    window.location.href = "index.html";
  } else {
    alert("Login Failed");
  }
  // }
});
