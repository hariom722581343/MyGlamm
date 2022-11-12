import { admin } from "../components/Admin.js";

let ad = document.getElementById("body");
ad.innerHTML = admin();

let add_Pro = document.getElementById("add_product");
add_Pro.addEventListener("click", function () {
  addProducts();
});

let addProducts = async () => {
  // e.preventDefault();
  let form = document.getElementById("product-form");
  let name = form.name.value;
  let description = form.description.value;
  let category = form.category.value;
  let offerPrice = +form.offerPrice.value;
  let actualPrice = +form.actualPrice.value;
  let img = form.img.value;

  let product = {
    id: Date.now() + name,
    img,
    name,
    description,
    category,
    offerPrice,
    actualPrice,
  };
  console.log(product);
  try {
    let res = await fetch(`http://localhost:3000/${category}`, {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-type": "application/json",
      },
    });
  } catch (err) {
    console.log(err);
  }
};

function Admin_name() {
  let A_nam = document.getElementById("admin_name");
  A_nam.innerHTML = "Devendra Singh <span>Admin</span>";
}

Admin_name();
