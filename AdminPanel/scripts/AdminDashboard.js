import { admin } from "../components/Admin.js";

let ad = document.getElementById("body");
ad.innerHTML = admin();

const url = "http://localhost:3000/shampoo";
const Furl = "http://localhost:3000/facewash";
const Lurl = "http://localhost:3000/lipstick";
const Curl = "http://localhost:3000/cream";

// var Total_Products = 0;

const getProducts = async () => {
  try {
    let Total_Products = 0;

    let Sres = await fetch(`http://localhost:3000/shampoo`);
    let Sdata = await Sres.json();

    let Fres = await fetch(`http://localhost:3000/facewash`);
    let Fdata = await Fres.json();

    let Lres = await fetch(`http://localhost:3000/lipstick`);
    let Ldata = await Lres.json();

    let Cres = await fetch(`http://localhost:3000/cream`);
    let Cdata = await Cres.json();

    Total_Products += +Sdata.length;
    Total_Products += +Fdata.length;
    Total_Products += +Ldata.length;
    Total_Products += +Cdata.length;

    // appendProducts(data);
    // console.log("Data :", Sdata.length);

    let A_nam = document.getElementById("total_products");
    A_nam.innerText = Total_Products;

    // console.log("Total Registered Products :", Total_Products);
  } catch (err) {
    console.log(err);
  }
};
getProducts();
