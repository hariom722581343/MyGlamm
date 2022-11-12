import { navbar } from "./components/navbar.js";
let Navbar=document.getElementById("nav");
Navbar.innerHTML=navbar();

import { footer } from "./components/footer.js";
let foot=document.getElementById("footer");
foot.innerHTML=footer();

const url="https://shrouded-hamlet-40263.herokuapp.com/api/Lipstick";


const getdata = async () => {
    let res = await fetch(url);
    let data = await res.json();
    append(data);
}
getdata()

const append = (data) => {
    if(data==undefined){
        return false;
    }
    let container=document.getElementById("container");
    container.innerHTML=null;
    data.forEach((ele) => {
        let card=document.createElement("div");
        card.onclick = () => {
            localStorage.setItem("clicked_item",JSON.stringify(ele));
            window.location.href="./Lipstick2.html"
        }
        
        let image=document.createElement("img");
        let name=document.createElement("h3");
        let description=document.createElement("p");
        let shades=document.createElement("div");
        let price=document.createElement("h3");
        let span1=document.createElement("span");
        let span2=document.createElement("s");
        span2.setAttribute("class","price-space2")
        span1.setAttribute("class","price-space1")
        shades.setAttribute("id","shades-icon")
        let symbol="₹"

        let span3=document.createElement("img");
        let span4=document.createElement("span");
        span4.setAttribute("class","shades-count")
        span3.src="https://files.myglamm.com/site-images/original/plus-icon.png";
        span4.innerText=`${ele.shades} SHADES`;
        

        image.src=ele.image;
        name.innerText=ele.name;
        description.innerText=ele.description;
        span1.innerText=`₹ ${ele.op}`
        if(ele.AP!=""){
            span2.innerText=`₹ ${ele.AP}`
        }
        
        shades.append(span3,span4)
        price.append(span1,span2);
        card.append(image,name,description,shades,price);
        container.append(card);
    })

}
