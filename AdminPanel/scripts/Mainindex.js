// const url = "http://localhost:3000/shampoo";
// const Furl = "http://localhost:3000/facewash";
// const Lurl = "http://localhost:3000/lipstick";
// const Curl = "http://localhost:3000/cream";

let addProducts = async (e) => {
  e.preventDefault();
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
  pri.innerText = offerPrice;
  pri.className = "product_price";

  let des = document.createElement("h4");
  des.innerText = description;

  let apri = document.createElement("h4");
  apri.innerText = actualPrice;

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

// let lbtn = document.getElementById("sort-low-to-high");
// lbtn.onclick = () => {
//   sortingLth();
// };

// let sortingLth = async () => {
//   try {
//     let res = await fetch(
//       "http://localhost:8080/products?_sort=price&_order=asc"
//     );
//     res = await res.json();
//     console.log("sorting:", res);
//     appendProducts(res);
//   } catch (error) {
//     console.log(error);
//   }
// };

// let hbtn = document.getElementById("sort-high-to-low");
// hbtn.onclick = () => {
//   sortingHtl();
// };

// let sortingHtl = async () => {
//   try {
//     let res = await fetch(
//       "http://localhost:8080/products?_sort=price&_order=desc"
//     );
//     res = await res.json();
//     console.log("sorting:", res);
//     appendProducts(res);
//   } catch (error) {
//     console.log(error);
//   }
// };

// let gbtn = document.getElementById("greater-than");
// gbtn.onclick = () => {
//   filterGreaterThan();
// };

// const filterGreaterThan = async () => {
//   try {
//     let res = await fetch("http://localhost:8080/products?price_gte=4001");
//     res = await res.json();
//     appendProducts(res);
//     console.log(res);
//   } catch (error) {
//     console.log(error);
//   }
// };

// let lesbtn = document.getElementById("less-than");
// lesbtn.onclick = () => {
//   filterLessThan();
// };

// const filterLessThan = async () => {
//   try {
//     let res = await fetch("http://localhost:8080/products?price_lte=4000");
//     res = await res.json();
//     appendProducts(res);
//     console.log(res);
//   } catch (error) {
//     console.log(error);
//   }
// };
