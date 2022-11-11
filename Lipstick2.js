const clicked_item =JSON.parse(localStorage.getItem("clicked_item"))

/* ---------------> Div1<----------------------*/

let image=document.createElement("img");
image.src=clicked_item.image;

document.getElementById("div1").append(image);

/* ---------------> Div2<----------------------*/

let Name = document.createElement("h2");
let description=document.createElement("p");
let rating=document.createElement("span");
let price=document.createElement("h2");
let mrp=document.createElement("p");
let P_span1=document.createElement("span")
let P_s=document.createElement("s");
mrp.innerText="(MRP incl. of all taxes)";
let icondiv=document.createElement("div");
let iconimg=document.createElement("img");

Name.innerText=`MYGLAMM ${clicked_item.name}`;
description.innerText=clicked_item.description;
rating.innerText=`${clicked_item.rating}`;
iconimg.src="icon.png";
iconimg.setAttribute("id","iconimg")
P_span1.innerText=`₹ ${clicked_item.op}`;
P_s.innerText=`₹ ${clicked_item.AP}`;
P_s.setAttribute("class","stag");

icondiv.append(rating,iconimg)

let div4=document.createElement("div");
div4.setAttribute("id","div4")

price.append(P_span1,P_s)
document.getElementById("div2").append(Name,description,icondiv,price,mrp,div4);


let arr=clicked_item.diff_shades;
arr.forEach((ele) => {
    let div=document.createElement("div")
    div.onclick = () =>{
            shadechange(ele)
    }
    let shade_image=document.createElement("img");
    shade_image.src=ele.shade_color;

    div.append(shade_image);
    document.getElementById("div4").append(div);
})


let updateimg=document.getElementById("div1")
const shadechange = (ele) =>{
    updateimg.innerHTML=null;
    let image=document.createElement("img");
    image.src=ele.shade_images;
    updateimg.append(image);
}

/*---------->add to bag button<---------------- */

postdata={
    image:clicked_item.image,
    description:clicked_item.name,
    price:clicked_item.op,
    id:clicked_item.id
}

console.log(postdata)

let divbutton=document.createElement("div");
let span=document.createElement("span");
span.innerText="ADD TO BAG";
let bagimg=document.createElement("img");
bagimg.src="bag.png";
bagimg.setAttribute("id","bagimg");
divbutton.setAttribute("id","add_to_bag_div")
divbutton.append(bagimg,span);
divbutton.onclick = async () =>{
    await fetch("https://shrouded-hamlet-40263.herokuapp.com/api/cart_page",{
        method:"POST",
        body:JSON.stringify(postdata),
        headers:{
            "Content-Type":"application/json"
        }
    })
    console.log("added");

}

document.getElementById("div2").append(divbutton);


/*-------->points<---------------*/
let points=Math.ceil(0.14388*clicked_item.op)
let points_div=document.createElement("div");
points_div.setAttribute("id","points-div");
let points_p=document.createElement("h4");
points_p.innerText=`You will receive cashback worth ₹${points} as myglammPOINTS on this purchase`
points_div.append(points_p);
document.getElementById("div2").append(points_div)


/*-------->offer<---------------*/

let offer_div=document.createElement("div");
offer_div.setAttribute("id","offer_div");

let ex_offer=document.createElement("h1");
ex_offer.innerText="Exclusive offer";
ex_offer.setAttribute("id","ex_offer");

let offer_div1=document.createElement("div");
let offer_img1=document.createElement("img");
let offer_img2=document.createElement("img");
let offer_img3=document.createElement("img");
let offer_img4=document.createElement("img");
offer_img1.src="https://files.myglamm.com/site-images/original/offer-2.png";
offer_img2.src="https://files.myglamm.com/site-images/original/offer-2.png";
offer_img3.src="https://files.myglamm.com/site-images/original/offer-2.png";
offer_img4.src="https://files.myglamm.com/site-images/original/offer-2.png";
let offer_span1=document.createElement("span")
offer_span1.innerText="Get Upto 50% OFF. Select a coupon code on checkout."

offer_div1.append(offer_img1,offer_span1)


let offer_div2=document.createElement("div");
let offer_span2=document.createElement("span");
offer_span2.innerText="Get up to ₹150 Cashback in Mobikwik. on a minimum purchase of ₹250.";

offer_div2.append(offer_img2,offer_span2)

let offer_div3=document.createElement("div");
let offer_span3=document.createElement("span");
offer_span3.innerText="Get 20% Cashback in Simpl Upto Rs.200, No Minimum Order Value.";

offer_div3.append(offer_img3,offer_span3)

let offer_div4=document.createElement("div");
let offer_span4=document.createElement("span");
offer_span4.innerText="Earn Good Points on this purchase.";

offer_div4.append(offer_img4,offer_span4)

offer_div.append(offer_div1,offer_div2,offer_div3,offer_div4);

document.getElementById("div2").append(ex_offer,offer_div)



/*-------->usage/tips/faqs<---------------*/



let usage_div=document.createElement("div");
let usage_div1=document.createElement("div");
let usage_div2=document.createElement("div");
usage_div1.setAttribute("id","usage_div1")
usage_div2.setAttribute("id","usage_div2")
let usage_span1=document.createElement("span");
usage_span1.onclick = () => {
    show_what_it_is_page()
}
let usage_span2=document.createElement("span");
usage_span2.onclick = () => {
    usage_span2.style.borderBottom="thick solid black"
    usage_span1.style.borderBottom=""
    usage_span3.style.borderBottom=""
    usage_span4.style.borderBottom=""
    usage_span5.style.borderBottom=""
    usage_div2.innerHTML=null;

    let how_to_use_ol=document.createElement("ol");
    let li_1=document.createElement("li");
    let li_2=document.createElement("li");
    let li_3=document.createElement("li");

    li_1.innerText="Start from the centre of your upper lip and move outwards.";
    li_2.innerText="Swipe the lipstick on your bottom lip.";
    li_3.innerText="Smack your lips and you're ready!";

    how_to_use_ol.append(li_1,li_2,li_3);
    usage_div2.append(how_to_use_ol)

}

let usage_span3=document.createElement("span");
usage_span3.onclick = () => {
    usage_span3.style.borderBottom="thick solid black"
    usage_span1.style.borderBottom=""
    usage_span2.style.borderBottom=""
    usage_span4.style.borderBottom=""
    usage_span5.style.borderBottom=""
    usage_div2.innerHTML=null;
    
    let expert_tips_ol=document.createElement("ol");
    let li_1=document.createElement("li");
    let li_2=document.createElement("li");

    li_1.innerText="For a bold and beautiful monochromatic look, apply the creamy matte lipstick to your eyes, lips and cheeks.";
    li_2.innerText="Don't forget to exfoliate and mositurise your lips before applying lipstick.";

    expert_tips_ol.append(li_1,li_2);
    usage_div2.append(expert_tips_ol)

}

let usage_span4=document.createElement("span");
usage_span4.onclick = () => {
    usage_span4.style.borderBottom="thick solid black"
    usage_span1.style.borderBottom=""
    usage_span2.style.borderBottom=""
    usage_span3.style.borderBottom=""
    usage_span5.style.borderBottom=""
    usage_div2.innerHTML=null;

    let h3=document.createElement("h3");
    let p=document.createElement("p");
    h3.innerText="FREE OF ANIMAL DERIVED INGREDIENTS";
    p.innerText="Ethylhexyl Palmitate, Octyldodecyl Stearoyl Stearate, Polyethylene, Pentaerythrityl Tetraisostearate, C18-36 Acid Glycol Ester, Silica, Bis-diglyceryl Polyacyladipate-2, Octyldodecanol, Caprylic/Capric Triglyceride, Synthetic Beeswax, Dimethiconol Behenate, Ozokerite, Aroma, Diethylhexyl Syringylidenemalonate, Aluminum Hydroxide, [+/-] CI 77891, CI 77491, CI 77492, CI77499, CI 77163, CI 15850, CI 45410, CI 19140, CI 42090"
    
    usage_div2.append(h3,p)
}


let usage_span5=document.createElement("span");
usage_span5.onclick = () => {
    usage_span5.style.borderBottom="thick solid black"
    usage_span1.style.borderBottom=""
    usage_span2.style.borderBottom=""
    usage_span3.style.borderBottom=""
    usage_span4.style.borderBottom=""
    usage_div2.innerHTML=null;

    let p1=document.createElement("p");
    let p2=document.createElement("p");
    let p3=document.createElement("p");
    let p4=document.createElement("p");
    let p5=document.createElement("p");
    let p6=document.createElement("p");

    p1.innerText="Q: What is a creamy matte lipstick?";
    p2.innerText="A: A creamy matte lipstick has a soft creamy texture with a demi matte finish. The LIT Creamy Matte Lipsticks by MyGlamm delivers both a matte finish without drying out your lips."

    p3.innerText="Q: Do I need to apply a lip balm before I apply this creamy matte lipstick?";
    p4.innerText="A: If you want added moisture, you can apply a lip balm. But remember to always exfoliate before applying any matte lipstick."


    p5.innerText="Q: What is the shelf-life of the product?";
    p6.innerText="A: All products that will be shipped will have a shelf-life of minimum 8 months to 12 months.";

    usage_div2.append(p1,p2,p3,p4,p5,p6)


}

usage_span1.innerText="WHAT IT IS";
usage_span2.innerText="HOW TO USE";
usage_span3.innerText="EXPERT TIPS";
usage_span4.innerText="WHAT'S IN IT";
usage_span5.innerText="FAQS";

usage_div1.append(usage_span1,usage_span2,usage_span3,usage_span4,usage_span5);
usage_div.append(usage_div1)
document.getElementById("div2").append(usage_div,usage_div2)



function show_what_it_is_page(){
    usage_span1.style.borderBottom="thick solid black"
    usage_span2.style.borderBottom=""
    usage_span3.style.borderBottom=""
    usage_span4.style.borderBottom=""
    usage_span5.style.borderBottom=""
    usage_div2.innerHTML=null;
    let content=document.createElement("div");
    let p1=document.createElement("p")
    p1.innerText="Flirtini is a classic deep red shade that’s perfect for a hot date. It is also PETA Approved cruelty-free and vegan..";
    let p2=document.createElement("p")
    p2.innerText="Play up those pouts with hues for every mood. With the LIT Creamy Matte Lipsticks by MyGlamm, we've got the best of both worlds – a mad matte finish in an oh-so-creamy texture! You also get long-staying power and intense colour payoff - what else could a girl ask for? The controlled slimstick design ensures perfect precision with every swipe of colour - no smudges!"
    let p3=document.createElement("h4")
    p3.innerText="Benefits"
    let ul=document.createElement("ul");
    let li1=document.createElement("li");
    li1.innerText="Demi-matte finish"
    let li2=document.createElement("li");
    li2.innerText="Creamy, smooth texture"
    let li3=document.createElement("li");
    li3.innerText="Immediate colour release"
    let li4=document.createElement("li");
    li4.innerText="Long-lasting"
    let li5=document.createElement("li");
    li5.innerText="Easy to apply"
    ul.append(li1,li2,li3,li4,li5);
    
    let p4=document.createElement("h4")
    p4.innerText="Enhanced Properties";
    let ul_1=document.createElement("ul");
    let li_1=document.createElement("li");
    li_1.innerText="Special blend of mineral and plant waxes for a smooth and precise application"
    let li_2=document.createElement("li");
    li_2.innerText="Special Silica Micro-beads for a creamy, satin feel"
    let li_3=document.createElement("li");
    li_3.innerText="Special Texturizing Agent for a luxurious, non-greasy texture"
    let li_4=document.createElement("li");
    li_4.innerText="Micronized Pigments for intense colour in one swipe"
    let li_5=document.createElement("li");
    li_5.innerText="Free from D5, preservatives, mineral oil, and nano-ingredients"

    ul_1.append(li_1,li_2,li_3,li_4,li_5);

    let p5=document.createElement("h4")
    p5.innerText="Net Weight: 3.7 g";

    let p6=document.createElement("h4")
    p6.innerText="Manufacturer Detail"

    let p7=document.createElement("p")
    p7.innerText="Regi India Cosmetics Pvt Ltd. C-08 Sara Industrial Estate, Chakrata Road, Rampur, Dehradun-248 197, Uttarakhand.";
    
    content.append(p1,p2,p3,ul,p4,ul_1,p5,p6,p7);
    usage_div2.append(content);
}

show_what_it_is_page()





















