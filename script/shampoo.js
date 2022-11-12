import { navbar } from "../components/navbar.js";
let Navbar = document.getElementById("nav");
Navbar.innerHTML = navbar();

import { footer } from "../components/footer.js";
let foot = document.getElementById("footer");
foot.innerHTML = footer();

let url = "http://localhost:3000/shampoo";

const getdata = async () => {
  let res = await fetch(url);
  let data = await res.json();
  console.log(data);
  append(data);
};
getdata();

const append = (data) => {
  if (data == undefined) {
    return false;
  }
  let container = document.getElementById("container");
  container.innerHTML = null;
  data.forEach((ele) => {
    let card = document.createElement("div");
    card.onclick = () => {
      localStorage.setItem("clicked_item", JSON.stringify(ele));
      window.location.href = "./shampoo2.html";
    };

    let image = document.createElement("img");
    let name = document.createElement("h3");
    let description = document.createElement("p");
    let price = document.createElement("h3");
    let span1 = document.createElement("span");
    let span2 = document.createElement("s");
    span2.setAttribute("class", "price-space2");
    span1.setAttribute("class", "price-space1");
    let symbol = "₹";

    image.src = ele.img;
    name.innerText = ele.name;
    description.innerText = ele.description;
    span1.innerText = `₹ ${ele.offerPrice}`;
    span2.innerText = `₹ ${ele.actualPrice}`;

    price.append(span1, span2);
    card.append(image, name, description, price);
    container.append(card);
  });
};
