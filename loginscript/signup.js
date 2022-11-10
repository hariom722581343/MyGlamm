let data = JSON.parse(localStorage.getItem("Signup"))||[];
console.log("data:",data)
document.getElementById("submit").addEventListener("click",function(e){
    e.preventDefault();
    console.log("hi");

    let form_data = {
       name : document.getElementById("name").value,
       mobile: document.getElementById("mobile").value,
       email: document.getElementById("email").value,
       password: document.getElementById("password").value, 
    };

    if(document.getElementById("name").value == ""||document.getElementById("mobile").value == ""||document.getElementById("email").value == ""||document.getElementById("password").value == "")
     {
        alert("Fill all the fields")
     }
     
     else
     {
        data.push(form_data);
        localStorage.setItem("Signup", JSON.stringify(data));
        alert("Account Created");
        window.location.href = "signin.html";
     }
})