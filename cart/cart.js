var parent = document.getElementById("product_div");
let cartitems = JSON.parse(localStorage.getItem("cart"));

var subtotal = 0;
var srng = 0;
var c = 1;

var total_amount = document.getElementById("total_amount");
  var amount = document.createElement("p");
  amount.setAttribute(
    "style",
    "margin-left:-52%;font-weight:600;font-size:20px"
  );

function showProducts() {
    cartitems.forEach(function (product) {
        cartitems.innerHTML = null;

        let div = document.createElement("div");


        let img = document.createElement("img");
        img.src = product.displayimg;

        let product_price = document.createElement("p");
        product_price.textContent = "₹" + product.price;
        srng += product.price;

        amount.innerText = srng;
        total_amount.append(amount);

        let product_name = document.createElement("p");
        product_name.textContent = product.title;

       
        let quantity_div = document.createElement("div");
        let plus = document.createElement("p");
        let quantity = document.createElement("p");
        let minus = document.createElement("p");
        quantity.innerText = c;

        // -----style----
        product_name.setAttribute("style", "font-size:16px; margin: 20px 35px;width:350px")
        product_price.setAttribute("style", "font-size:20px; margin: 40px 40px;")
        div.setAttribute("style", "Margin-top:30px; display:flex;");
        quantity_div.setAttribute("style", "display:flex;justify-content:center; align-items:center; width:100px;height:60px; background-color:#EEEEEE;margin:30px 100px;position:relative;");



        plus.innerText = "+";

        plus.setAttribute("style", "font-size:30px; margin-left:10px;cursor:pointer;")
        minus.setAttribute("style", "font-size:30px; margin-right:12px;cursor:pointer;color:#BDBDBD;")

        minus.innerText = "-";
        plus.addEventListener("click", increassQuantirty);
        minus.addEventListener("click", decressQuantirty);

        // var individual_total_amount = document.createElement("p");

        var q = 1
        function increassQuantirty() {
            if(q >= 5){
                quantity.innerText = 5;
                individual_total_amount.innerText =  product.price * +quantity.innerText;
           
                plus.style.color = "#BDBDBD";

            } else {
                quantity.innerText = ++q;
                individual_total_amount.innerText =  product.price * +quantity.innerText;
                minus.style.color = "black";

                srng += product.price ;
                console.log(srng+" srng");
                
                amount.innerText = srng;
                total_amount.append(amount);

                console.log(product.price * +quantity.innerText);

            }
        }

        // console.log(subtotal+ increassQuantirty());
        
        var s = q;
        function decressQuantirty() {
            if (q <= 1) {
                quantity.innerText = 1;
                individual_total_amount.innerText =  product.price * +quantity.innerText;
                minus.style.color = "#BDBDBD";
                plus.style.color = "black";
                // individual_total_amount.innerText = "₹" + product.price * c;
            }
            else{
                quantity.innerText = --q;
               
                individual_total_amount.innerText =  product.price * +quantity.innerText;
                  subtotal = (Number(individual_total_amount.innerText) + subtotal)
                  console.log(subtotal, "decrease item");
                  plus.style.color = "black";

                  srng -= product.price;
                  console.log(srng+" srng");

                  amount.innerText = srng;
                  total_amount.append(amount);

                }
        }

        quantity.setAttribute("style", "font-size:30px;")

        // console.log(quantity)
        var individual_total_amount = document.createElement("p");
        individual_total_amount.innerText =  product.price * c;

        individual_total_amount.setAttribute("style", "font-size:20px; margin-top: 40px;")

        //         ------>remove item<-------

        var remove_item = document.createElement("img");
        remove_item.src = "https://www.pngfind.com/pngs/m/9-98161_x-mark-x-alphabet-icon-hd-png-download.png";
        remove_item.setAttribute("style", "width:30px; height:20px;margin:40px 70px;cursor:pointer;");

        

       

        remove_item.onclick=function(){
            removetoCart(event,product)
          };


      individual_total_amount.innerText = product.price * c;

    // console.log(quantity)
    var individual_total_amount = document.createElement("p");
    individual_total_amount.innerText = product.price * c;

    //    console.log(Number(individual_total_amount.innerText));
    //    console.log(individual_total_amount.innerText , "im")
    individual_total_amount.setAttribute(
      "style",
      "font-size:20px; margin-top: 40px;"
    );

    //         ------>remove item<-------

    var remove_item = document.createElement("img");
    remove_item.src =
      "https://www.pngfind.com/pngs/m/9-98161_x-mark-x-alphabet-icon-hd-png-download.png";
    remove_item.setAttribute(
      "style",
      "width:30px; height:20px;margin:40px 70px;cursor:pointer;"
    );

    remove_item.onclick = function () {
      removetoCart(event, product);
    };

    //         ------>remove item<-------

    let line = document.createElement("hr");

    line.setAttribute(
      "style",
      "margin-top:15px;height: 1px;background-color: #E0E0E0; border:none"
    );

    quantity_div.append(minus, quantity, plus);

    div.append(
      img,
      product_name,
      product_price,
      quantity_div,
      individual_total_amount,
      remove_item
    );

    parent.append(div, line);
  });

  //         ------>remove item function<-------

  function removetoCart(e, prod) {
    e.preventDefault();

    var newprods = cartitems.filter(function (p) {
      if (p != prod) {
        return p;
      }
    });
    localStorage.removeItem("cart");

    localStorage.setItem("cart", JSON.stringify(newprods));
    location.reload();
  }

  //         ------>remove item function<-------

}


var total_value = document.getElementById("total_value");
var bag_heading = document.getElementById("bag_heading");
var checkout_btn = document.getElementById("checkout_btn");

var bag_item = document.createElement("h1");
bag_item.innerText = "(" + cartitems.length + ")";
bag_heading.append(bag_item);
if (cartitems.length >= 1) {
  bag_heading.style.display = "flex";
  total_value.style.display = "flex";
  checkout_btn.style.display = "block";
}

var empty_cart = document.getElementById("sub_div");

// console.log(cartitems.length);
if (cartitems.length < 1) {
  empty_cart.style.display = "block";
} else {
  empty_cart.style.display = "none";
  empty_cart.style.display = "none";
}

showProducts();









var checkoutbtn = document.getElementById("checkout_btn");
checkoutbtn.onclick = function()
{
  if(localStorage.getItem("myglamm-total")===null)
  {
      localStorage.setItem("myglamm-total",JSON.stringify([]));
  }
  
  let myglammtotal = JSON.parse(localStorage.getItem("myglamm-total"));
  
  myglammtotal.pop()
  myglammtotal.push(srng);

  localStorage.setItem("myglamm-total",JSON.stringify (myglammtotal));
  
    window.location.href = "/checkout"
}
