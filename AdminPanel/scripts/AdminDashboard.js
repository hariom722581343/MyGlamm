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

    let Sam = +Sdata.length;
    let Fac = +Fdata.length;
    let Lip = +Ldata.length;
    let Crm = +Cdata.length;

    // appendProducts(data);
    // console.log("Data :", Sdata.length);

    let A_nam = document.getElementById("total_products");
    A_nam.innerText = Total_Products;
    let A_lip = document.getElementById("total_lip");
    A_lip.innerText = Lip;
    let A_sam = document.getElementById("total_sam");
    A_sam.innerText = Sam;
    let A_fac = document.getElementById("total_fac");
    A_fac.innerText = Fac;
    let A_crm = document.getElementById("total_crm");
    A_crm.innerText = Crm;

    var xValues = ["Lipstick", "Shampoo", "Facewash", "Creams"];
    var yValues = [Lip, Sam, Fac, Crm];
    var barColors = ["#f71b55", "#2ff7f3", "#12eb77", "#ffced6"];

    new Chart("myChart", {
      type: "pie",
      data: {
        labels: xValues,
        datasets: [
          {
            backgroundColor: barColors,
            data: yValues,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "",
        },
      },
    });

    // console.log("Total Registered Products :", Total_Products);
  } catch (err) {
    console.log(err);
  }
};
getProducts();
