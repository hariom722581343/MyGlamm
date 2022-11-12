import { navbar } from "../components/navbar.js";
let Navbar = document.getElementById("nav");
Navbar.innerHTML = navbar();

import { footer } from "../components/footer.js";
let foot = document.getElementById("footer");
foot.innerHTML = footer();

const clicked_item = JSON.parse(localStorage.getItem("clicked_item"));

/* ---------------> Div1<----------------------*/

let image = document.createElement("img");
image.src = clicked_item.img;

document.getElementById("div1").append(image);

/* ---------------> Div2<----------------------*/

let Name = document.createElement("h2");
let description = document.createElement("p");
let rating = document.createElement("span");
let price = document.createElement("h2");
let mrp = document.createElement("p");
let P_span1 = document.createElement("span");
let P_s = document.createElement("s");
mrp.innerText = "(MRP incl. of all taxes)";

Name.innerText = `MYGLAMM ${clicked_item.name}`;
description.innerText = clicked_item.description;

P_span1.innerText = `₹ ${clicked_item.offerPrice}`;
P_s.innerText = `₹ ${clicked_item.actualPrice}`;
P_s.setAttribute("class", "stag");

price.append(P_span1, P_s);
document.getElementById("div2").append(Name, description, price, mrp);

/*---------->add to bag button<---------------- */

let postdata = {
  image: clicked_item.img,
  description: clicked_item.name,
  price: clicked_item.actualPrice,
  id: clicked_item.id,
};

let divbutton = document.createElement("div");
let span = document.createElement("span");
span.innerText = "ADD TO BAG";
let bagimg = document.createElement("img");
bagimg.src = "./bag.png";
bagimg.setAttribute("id", "bagimg");
divbutton.setAttribute("id", "add_to_bag_div");
divbutton.append(bagimg, span);
divbutton.onclick = async () => {
  await fetch("https://shrouded-hamlet-40263.herokuapp.com/api/cart_page", {
    method: "POST",
    body: JSON.stringify(postdata),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

document.getElementById("div2").append(divbutton);

/*-------->points<---------------*/
let points = Math.ceil(0.14388 * clicked_item.actualPrice);
let points_div = document.createElement("div");
points_div.setAttribute("id", "points-div");
let points_p = document.createElement("h4");
points_p.innerText = `You will receive cashback worth ₹${points} as myglammPOINTS on this purchase`;
points_div.append(points_p);
document.getElementById("div2").append(points_div);

/*-------->offer<---------------*/

let offer_div = document.createElement("div");
offer_div.setAttribute("id", "offer_div");

let ex_offer = document.createElement("h1");
ex_offer.innerText = "Exclusive offer";
ex_offer.setAttribute("id", "ex_offer");

let offer_div1 = document.createElement("div");
let offer_img1 = document.createElement("img");
let offer_img2 = document.createElement("img");
let offer_img3 = document.createElement("img");
let offer_img4 = document.createElement("img");
offer_img1.src = "https://files.myglamm.com/site-images/original/offer-2.png";
offer_img2.src = "https://files.myglamm.com/site-images/original/offer-2.png";
offer_img3.src = "https://files.myglamm.com/site-images/original/offer-2.png";
offer_img4.src = "https://files.myglamm.com/site-images/original/offer-2.png";
let offer_span1 = document.createElement("span");
offer_span1.innerText = "Get Upto 50% OFF. Select a coupon code on checkout.";

offer_div1.append(offer_img1, offer_span1);

let offer_div2 = document.createElement("div");
let offer_span2 = document.createElement("span");
offer_span2.innerText =
  "Get up to ₹150 Cashback in Mobikwik. on a minimum purchase of ₹250.";

offer_div2.append(offer_img2, offer_span2);

let offer_div3 = document.createElement("div");
let offer_span3 = document.createElement("span");
offer_span3.innerText =
  "Get 20% Cashback in Simpl Upto Rs.200, No Minimum Order Value.";

offer_div3.append(offer_img3, offer_span3);

let offer_div4 = document.createElement("div");
let offer_span4 = document.createElement("span");
offer_span4.innerText = "Earn Good Points on this purchase.";

offer_div4.append(offer_img4, offer_span4);

offer_div.append(offer_div1, offer_div2, offer_div3, offer_div4);

document.getElementById("div2").append(ex_offer, offer_div);

/*-------->usage/tips/faqs<---------------*/

let usage_div = document.createElement("div");
let usage_div1 = document.createElement("div");
let usage_div2 = document.createElement("div");
usage_div1.setAttribute("id", "usage_div1");
usage_div2.setAttribute("id", "usage_div2");
let usage_span1 = document.createElement("span");
usage_span1.onclick = () => {
  show_what_it_is_page();
};
let usage_span2 = document.createElement("span");
usage_span2.onclick = () => {
  usage_span2.style.borderBottom = "thick solid black";
  usage_span1.style.borderBottom = "";
  usage_span4.style.borderBottom = "";
  usage_span5.style.borderBottom = "";
  usage_div2.innerHTML = null;

  let p1 = document.createElement("p");
  p1.innerText =
    "Wet hair thoroughly with lukewarm water. Apply a generous amount of this onion shampoo onto wet hair and scalp. Massage well and rinse thoroughly. Follow with our nourishing Onion & Moringa conditioner. Use daily for best results.";

  let p2 = document.createElement("p");
  p2.innerText = "When to Use";

  let how_to_use_ol = document.createElement("ol");
  let li_1 = document.createElement("li");
  let li_2 = document.createElement("li");

  li_1.innerText = "Start from the centre of your upper lip and move outwards.";
  li_2.innerText = "Swipe the lipstick on your bottom lip.";

  how_to_use_ol.append(li_1, li_2);
  usage_div2.append(p1, p2, how_to_use_ol);
};

let usage_span4 = document.createElement("span");
usage_span4.onclick = () => {
  usage_span4.style.borderBottom = "thick solid black";
  usage_span1.style.borderBottom = "";
  usage_span2.style.borderBottom = "";
  usage_span5.style.borderBottom = "";
  usage_div2.innerHTML = null;

  let ul = document.createElement("ul");
  let li1 = document.createElement("li");
  let li2 = document.createElement("li");
  let li3 = document.createElement("li");

  li1.innerText =
    "Onion Seed Oil: This hair shampoo is infused with pure, cold-pressed onion seed oil - a superfood ingredient known for calming and soothing hair, and promoting hair growth while controlling hair fall.";
  li2.innerText =
    "Moringa Oil: Strengthens hair without drying it out, and promotes scalp health. It also strengthens your hair follicles from root to tip";
  li3.innerText =
    "Shikakai: Shikakai or soap nut powder, present in onion hair shampoo has a soothing effect on the scalp and also cleanses it while removing any buildup or dirt.";

  ul.append(li1, li2, li3);
  usage_div2.append(ul);
};

let usage_span5 = document.createElement("span");
usage_span5.onclick = () => {
  usage_span5.style.borderBottom = "thick solid black";
  usage_span1.style.borderBottom = "";
  usage_span2.style.borderBottom = "";
  usage_span4.style.borderBottom = "";
  usage_div2.innerHTML = null;

  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  let p4 = document.createElement("p");
  let p5 = document.createElement("p");
  let p6 = document.createElement("p");

  p1.innerText = "Q: What are the benefits of using this shampoo?";
  p2.innerText =
    "A: MyGlamm SUPERFOODS Onion & Moringa Hair Shampoo is enriched with pure, cold-pressed onion seed oil that controls hair fall, promotes hair growth and supports thick, long hair. It’s also infused with Moringa, rich in minerals and vitamins which not only nourish hair but also strengthens and smoothes hair without drying it out. It also helps fight frizz, dryness, and strengthens your hair follicles from root to tip. This innovative formula is also rich in Shikakai that soothes the scalp, nourishes your hair follicles, reduces buildup and also gets rid of dandruff. It also works on your hair to prevent premature greying.";

  p3.innerText = "Q: Does this shampoo reduce hair fall?";
  p4.innerText =
    "A: MyGlamm SUPERFOODS Onion & Moringa Hair Shampoo is enriched with pure, cold pressed onion seed oil to control hair fall, promote hair growth and support thick, long hair. It’s also infused with the superfood - moringa. It is rich in minerals and vitamins which not only nourish hair but also deliver long-lasting hydration. This innovative formula also fights dandruff and soothes the scalp.";

  p5.innerText = "Q: Is this shampoo gentle to use?";
  p6.innerText =
    "A: Yes, MyGlamm SUPERFOODS Onion & Moringa Hair Shampoo is gentle to use. It’s a paraben-free, mineral oil-free and silicone-free formula created with natural ingredients and contains no harmful chemicals. It gently cleanses your hair without stripping the scalp's natural oils, leaving it super smooth and shiny.";

  usage_div2.append(p1, p2, p3, p4, p5, p6);
};

usage_span1.innerText = "WHAT IT IS";
usage_span2.innerText = "HOW TO USE";
usage_span4.innerText = "WHAT'S IN IT";
usage_span5.innerText = "FAQS";

usage_div1.append(usage_span1, usage_span2, usage_span4, usage_span5);
usage_div.append(usage_div1);
document.getElementById("div2").append(usage_div, usage_div2);

function show_what_it_is_page() {
  usage_span1.style.borderBottom = "thick solid black";
  usage_span2.style.borderBottom = "";
  usage_span4.style.borderBottom = "";
  usage_span5.style.borderBottom = "";
  usage_div2.innerHTML = null;
  let content = document.createElement("div");
  let p1 = document.createElement("p");
  p1.innerText = "MyGlamm SUPERFOODS Onion & Moringa Shampoo";
  let p2 = document.createElement("p");
  p2.innerText = "Give It To Me Quick";

  let ul = document.createElement("ul");
  let li1 = document.createElement("li");
  li1.innerText =
    "An effective hair growth Shampoo powered with a high concentration of cold-pressed Onion Seed Oil, Moringa Oil & Shikakai";
  let li2 = document.createElement("li");
  li2.innerText =
    "An anti-hair loss shampoo that nourishes roots and helps control hair fall";
  let li3 = document.createElement("li");
  li3.innerText = "Reverses hair damage and makes hair stronger";
  let li4 = document.createElement("li");
  li4.innerText = "Removes scalp buildup ";
  let li5 = document.createElement("li");
  li5.innerText = "A hair shampoo suitable for all hair types";
  ul.append(li1, li2, li3, li4, li5);

  let p4 = document.createElement("h4");
  p4.innerText = "Enhanced Properties";
  let ul_1 = document.createElement("ul");
  let li_1 = document.createElement("li");
  li_1.innerText =
    "Special blend of mineral and plant waxes for a smooth and precise application";
  let li_2 = document.createElement("li");
  li_2.innerText = "Special Silica Micro-beads for a creamy, satin feel";
  let li_3 = document.createElement("li");
  li_3.innerText =
    "Special Texturizing Agent for a luxurious, non-greasy texture";
  let li_4 = document.createElement("li");
  li_4.innerText = "Micronized Pigments for intense colour in one swipe";
  let li_5 = document.createElement("li");
  li_5.innerText =
    "Free from D5, preservatives, mineral oil, and nano-ingredients";

  ul_1.append(li_1, li_2, li_3, li_4, li_5);

  let p5 = document.createElement("h4");
  p5.innerText = "Net Weight:200ml";

  let p6 = document.createElement("h4");
  p6.innerText = "Manufacturer Detail";

  let p7 = document.createElement("p");
  p7.innerText =
    "Regi India Cosmetics Pvt Ltd. C-08 Sara Industrial Estate, Chakrata Road, Rampur, Dehradun-248 197, Uttarakhand.";

  content.append(p1, p2, ul, p4, ul_1, p5, p6, p7);
  usage_div2.append(content);
}

show_what_it_is_page();
