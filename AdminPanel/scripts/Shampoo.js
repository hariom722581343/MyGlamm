import { admin } from "../components/Admin.js";

let ad = document.getElementById("body");
ad.innerHTML = admin();

const url = "http://localhost:3000/shampoo";

const getProducts = async () => {
  try {
    let res = await fetch(`http://localhost:3000/shampoo`);
    let data = await res.json();
    appendProducts(data);
    console.log("Data :", data);
  } catch (err) {
    console.log(err);
  }
};
getProducts();

const cardProduct = ({
  name,
  offerPrice,
  description,
  actualPrice,
  img,
  id,
}) => {
  let div = document.createElement("div");
  div.className = "item";
  let nam = document.createElement("h2");
  nam.innerText = name;

  let pri = document.createElement("h3");
  pri.innerText = `Seeling Price ₹${offerPrice}`;
  pri.className = "product_price";

  let des = document.createElement("h4");
  des.innerText = description;

  let apri = document.createElement("h4");
  apri.innerText = `MRP ₹${actualPrice}`;

  let im = document.createElement("img");
  im.src = img;

  let dbtn = document.createElement("button");
  dbtn.innerText = "Remove";
  dbtn.className = "remove_item";
  dbtn.onclick = () => {
    deleteProduct(id);
  };

  let upbtn = document.createElement("button");
  upbtn.className = "update_price";
  upbtn.innerText = "Update Price";
  upbtn.onclick = () => {
    updatePrice(id);
  };
  div.append(im, nam, des, pri, apri, dbtn, upbtn);
  return div;
};

const appendProducts = (data) => {
  let container = document.getElementById("container");
  container.innerHTML = null;
  data.forEach((el) => {
    let card = cardProduct(el);
    container.append(card);
  });
};

const deleteProduct = async (id) => {
  try {
    let res = await fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.log(err);
  }
  getProducts();
};

const updatePrice = async (id) => {
  let newPrice = window.prompt("Enter New Price");
  let data = { offerPrice: newPrice };
  try {
    let res = await fetch(`${url}/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
  getProducts();
};

function Admin_name() {
  let A_nam = document.getElementById("admin_name");
  A_nam.innerHTML = "Devendra Singh <span>Admin</span>";
}

Admin_name();
