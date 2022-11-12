
var tamount = document.getElementById("tamount");
var shipcharge = document.getElementById("shipcharge");
var discount = document.getElementById("discount");

    
let total01 = JSON.parse(localStorage.getItem("myglamm-total"));
let total = total01[0];
console.log(total);


tamount.innerHTML = null;
shipcharge.innerHTML = null;
discount.innerHTML = null;

tamount.style.fontWeight = "bold";
tamount.style.textAlign = "right";
shipcharge.style.textAlign = "right";
discount.style.textAlign = "right";


tamount.innerHTML = "₹ "+total;
shipcharge.innerHTML = "₹ "+120;
discount.innerHTML = "₹ "+30;


var payamount = document.getElementById("payamount");
var srng = total+90;
payamount.innerHTML = null;
payamount.style.fontWeight = "bold";
payamount.style.textAlign = "right";

payamount.innerHTML = "₹ "+srng;


// if(localStorage.getItem("p_amount")===null)
// {
//     localStorage.setItem("p_amount",JSON.stringify([]));
// }

// let pay_amount = JSON.parse(localStorage.getItem("p_amount"));

// pay_amount.pop()
// pay_amount.push(srng.toFixed(0));

// localStorage.setItem("p_amount",JSON.stringify (pay_amount));



var yousaved = document.getElementById("yousaved");

yousaved.innerHTML = null;
yousaved.style.textAlign = "right";

yousaved.innerHTML = "₹ "+30;


var non = document.getElementById("non");
non.style.textAlign = "right";



var proceed_payment = document.getElementById("proceed_payment");

proceed_payment.onclick = function()
{
    if(localStorage.getItem("p_amount")===null)
    {
        localStorage.setItem("p_amount",JSON.stringify([]));
    }
    
    let pay_amount = JSON.parse(localStorage.getItem("p_amount"));
    
    pay_amount.pop()
    pay_amount.push(srng.toFixed(0));

    localStorage.setItem("p_amount",JSON.stringify (pay_amount));

    window.location.href = "./payment.html";
}


var op = document.getElementById("op");

function ckeckaddr()
{
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var pin = document.getElementById("pin").value;
    console.log(city)

    var addr = city+", "+state+", "+pin;
    
    op.innerHTML = null;


    if(city.length <= 3 && state.length <= 3 && pin <= 15)
    {
        alert("Please Add Your Address....")
    }
    else
    {
        op.append("Delivery Available On  "+addr);
    }
     


}

var s01 = 0;
function promo() 
{
    let applypromo = document.getElementById("apply_promo")

    console.log(srng);

    if(s01 == 0)
    {
        s01 = 1;

        if (applypromo.value === "_realshiva") 
        {
            srng = srng - (srng* (30/100));
            console.log(srng.toFixed(0));
    
            let p = document.createElement("p");
            let q01 = document.getElementById("q01");
            q01.innerHTML = null;
            p.innerText = "Promocode Applied...!"
            q01.append(p);
            q01.style.color = "#09b109";
            q01.style.fontWeight = "bolder";
            q01.style.paddingLeft = "2%";
            q01.style.paddingTop = "2%";
    
            var payamount = document.getElementById("payamount");
                    
            payamount.innerHTML = null;
            payamount.style.fontWeight = "bold";
            payamount.style.textAlign = "right";
    
            payamount.innerHTML = "₹ "+srng.toFixed(0);
    
       } 
        
        else 
        {
    
    
    
            let p = document.createElement("p");
            let q01 = document.getElementById("q01");
            q01.innerHTML = null;
            p.innerText = "Please Enter Valid Promocode...!"
            q01.append(p);
            q01.style.color = "red";
            q01.style.fontWeight = "bolder";
            q01.style.paddingLeft = "2%";
            q01.style.paddingTop = "2%";
        }
    }
    else
    {
        
        

    
    
            let p = document.createElement("p");
            let q01 = document.getElementById("q01");
            q01.innerHTML = null;
            p.innerText = "Promocode Is Already Applied...!"
            q01.append(p);
            q01.style.color = "red";
            q01.style.fontWeight = "bolder";
            q01.style.paddingLeft = "2%";
            q01.style.paddingTop = "2%";
    }
   
}
