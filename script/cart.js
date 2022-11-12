const url ="https://shrouded-hamlet-40263.herokuapp.com/api/cart_page";

let show =async  ()=>{

 let res=await fetch(url);
 res= await res.json();
 localStorage.setItem("cart",JSON.stringify(res));
 console.log(res);
}
show();


var parent = document.getElementById("product_div");
let cartitems = JSON.parse(localStorage.getItem("cart"))||[];

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
        img.src = product.image;

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
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QEBAQDxAQFQ8OEBAQEBAQEBAVDxAQGBEXFhUVFRUYHSggGBolGxUVIjEhJSkrLi4uFx8zODM3NygtLisBCgoKDg0OGhAQGjcmHyYuLSstLTEvLS0tLS0rLy01LS0tKystLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLf/AABEIAMkA+wMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcCBQMECAH/xABMEAABAwEDBQsGCwcDBQEAAAABAAIDBAUREgYHMVGREyFBUmFxcoGhscEVIjM1QlMXMkNUYnOTsrPR0iM0kpSiwtMUY+ElRIKj8ST/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAwQFBgIB/8QAMhEAAgECAgYJAwUBAAAAAAAAAAECAxEEBSExUWFxoRIUM4GRscHR8BMyUiIjQULh8f/aAAwDAQACEQMRAD8AvFERAEREAREQBFxyyBrXOdoaC48wF5VI5R5Rz1kpc55EQJ3ONpIa1us6zyqzh8NKs3Z2SK2JxMaCV1dsvEL6vPlNaE8Xo5pW9F7gNi3FNlraMeifF9Y1rvBWJZbNfbJeRWjmcH90WufsXWiq2lzmVA9LTxP5WF7T23rc0ucqld6WORnKLnDsUEsFWj/XwLEcbQf9rcdH+cycoo9S5Z2dJddUNaTwSBzO0i7tW4p62KQXxyxvB0YHtPcVXlCUPuTXcWITjP7XfvKqy7yklmqJIY3ubBC4x3McQJHA3OcbtO/eOpRmCtmj345ZW9CR47iuOf4779ON9/PiKwXRwpxhFRSObnVlOTk2b2kyytGPRUOcBwSBru8XqU5M5wHySshq2sAkIa2Vl4ucdAc3UdYVcr7ECXNA0lzbrtN9+8vE8NSmrOPej3DFVYO/S7np8z0Uiwi+K2/UO5ZrnTowiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIDiqIg9j2HQ9rmnrFyoe2bJmo5XRTNIuPmO9l7eAtKv1aOW1qGaV9LMY91jdcY5mi4714LcW8d4q3hK8qTdo3X8+/Mp4vDxqpXdn/AB7FIIrqqMjLOk3zTMaTwxuezsablqanNtSO9HJKzra4doV+OY0Xruvm4oSy6stVn3+6KrRTyqzZTj0VRE7kexzTtF609VkJaLPkWvGuORp7DcexWI4qjLVJeXmV5YatHXF/OBG0Y4tN7SQdYNx2hd6qsWqi9JTytu4TG67aF0Dq4RwcKnTutDIJKz0o+koiIAthk8+BtTE+peWwxuD3ENc4kjfAuG/puWvRfGrqx9i7NMvGkyqoJfiVUV54HEsOx4BW1inY74rmu6Lge5eeVlFM9nxHOb0XEdyzZZbH+svnI0o5lL+0fnM9EoqLpsp6+L4lVJvcDiHjY4FbelziVzPjtjk52YSetv5KCWXVVqafzeWI5jSetNfNxbqKuqbOcPlaY88bwewrcUOcCz5CA50kZPvI3YdrbwFBLCVo/wBfDSTRxlCX9l5EtRccT2uAc0gtcAQQbwRrBXIq5ZCIiAIiIAiIgCIiAIiIAiIgCqjOrRYKmOYaJmAHpMN3cRsVk2jatPTi+eVjOQkYjzDSVWuXmU9NWMZHC15Mb8QkdvC664gDTqV7Axn9VSS0arlHHyh9Jxb07Pm65pbGyqraW4RylzB8nJ5zOq/fHUpzY+cWnkubUMdE7jDzoye8KrUWnVwtKppa07VoMuliqtLQno2PSehKWqjlaHxPa9p9ppBHYudee6Gumgdjhkex2thuv5xoPWppY+ciVlzaqMPbwyR+a8c7dB7FnVcvnHTB35P25mjSzGEtE1bmvfkWgunVWbTy+lhif042HvC6lk5RUlVduMrS4/Ju82T+E6Vt1RalF2ehl9SU43WleJHKnIqzn/8Abhp1xuc3svuWoqs2tK70UsjOQhrx4HtU6RSxxNWOqT+cSKWGoy1xXzgVZU5tKgfEnif0muafFampyItGP5DF9W9pV0op45hWWuz7iCWXUXquu/3uefqqzKiL0sEjLuF0bgNt1y6YI1hejV0aqyqaX0sETr+FzGk7VPHMvyj4Mglln4z8V88igkVzVWQ9nSfI4eg9zVpqrNnA70VRKzke1rx2YSpo5hReu67vYgll9ZarPv8AcrJFNqnNpVN9HNE/nDmHxXXp83dc5wDzGxvC/Hiu5mjSputUbX6a+cyHqtfV0H85EnzWVL30j2ON7YpC1l/A0tBu5rypstZk/Y8dHA2GO83b7nnS950krZrDrzU6kpR1Nm7Qg4U4xetIIiKIlCIiAIiIAiIgCItNlJlBDQxY5De929HGPjPPgOVeoxcmktZ5lJRXSk9B362sigYZJntYxulzjcP+VXeUOcSR98dG3A3QZXjzz0RwdaidtW3UVj8c77wCcLBvMYOQeK1y16GAjDTU0vl/pj18fOeiGhc/8Mp5nPcXvcXPdvlzjeT1rFEWgZ4REQBEXNQ0kk0jIom3vkcGtHL+S+bz7uNjktYUlbUNY28MacUkg9ho1HWdAVm5TZSxWdHFG1u6SkANjL7iGAXYnOuP/KwiZT2NQku33aTxpZToA5B2AKp7Tr5KiV80pvfIbzqA4GjkAWel1up0n9i1bzRb6pT6K+9693z+O9k5+FF3zNv8wf8AGnwou+Zt/mD/AI1XqKfqVD8eb9yv13Eflyj7FhfCi75k3+YP+NY/CjJ8zb9uf0Kv0TqVD8eb9x13Eflyj7FgfCi/5oz7c/oT4UZPmjPtz+hV+idSofjzfuOu4j8+UfYsD4UZPmjPtz+hPhRf80Z9uf0Kv0TqVD8eb9x13Efnyj7E+OdCX5oz7Y/pXcs3OVG52GpgMbT7cb8YHOLgdirVEeCoNW6Pn/p9WNrp36XJe3qehaedkjGyRuDmPAc1zTeCDoIXMofmwc40AxE3CV4byDe3tt6mCxKsOhNx2G3Sn04RltVwiIoyQIiIAiIgCIiA1lv2vHRwPmfwbzG8L3nQAqStS0paqV0szi57j1NHAGjgC3mX9tmpqnMa79jTnAwcBd7Ttu91KMLcwWH+nDpPW+S2GFjcQ6k+itS5vaERFdKQRdygsmpn9DDI8a2tOHboUjs/N3WyXGQxxD6RLnbB+ajnWpw+6SRJClUn9sW/m3URBFPbbyBjpqSWZsr3yxAO0AMwg+dvcygS+Uq0KqvBn2rRnSaU0FamRNgMoYHVVTc2VzC4l3yUem7nPDsWjzdZM7s4Vc7f2cZ/ZNI3nvHtXah3qR5zopDQlzHkNZIwyNGh7SbhfzEgqliq3TmqEXa70v09y7haLpwddq9loXr7Ff5WZQPrpy7fELN6JmpvGPKVpERaEYqMVGOpGfKTlJylrYXeobEq52l8MEj2D2gPN6idPUs8mrObU1cELviPf59x3y0C8gc9yvWCJrGtYxoaxoAa1ouAGoBVMVi/otRSuy3hcJ9a8m7JHnyeB8biyRrmvbpa4EOHUVgrVzn2Yx9KJ7gJYXNGLhLHG4g69+4qqlNh6yrQ6VtxDiKP0Z9G+8Ii7djUBqaiGAG7dXhpOpuknYCpm0ldkKTbsjip6OWS/c45H3acDHOA2BcUkZaSHAhw0hwII6ivQFBRRQRtiiaGsYLgAO06zyqJ5y7HjkpjVAASwYb3Ab74y67CddxN+1Z9PMFOoouNkzQq5e4U3JSu18+ehVSIhWiZxdGb+HBZ8H08b9rypGtbk7DudJTM4sEV/PgBK2S5qrLpTk97OmpR6MIrcgiIoyQIiIAiIgC1eUlb/p6SolGlkZw9I+a3tIW0ULzp1BbSNYPlZW38zQT+SloQ6dSMd5FXn0KcpbEVQizghfI5rI2lz3m5rWi8k8ys3JbIOOLDNV3PluvEXybDy8Y9i3q9eFJXl4GBRoTqu0fH+EQzJ7JOqrfOaMEXvZAcJ6I9pWJYuQ1HT3F7d2kFxxSDzb+RujvUoa0AXAXAbwA0ALJY9bGVKmhaFsXvrNmjgqdPXpe1+2owYwAAAAAaABcAonnGtGpp6eN9PIWYpMDy0C+4tJFxOjQpeopnKhxWfIfdyRP/AKw09jlFhrfWjfaSYq/0ZWf8M6+QVaayhlime572ukjc55JcWvF4vJ5zsUFybyZkqqp8JvEcDyJn6gHEYRym5dzN7bkdJO9szsMU7Q0vJ81jwb2k8m+RfzKbWllJQ0Ub3wvifJK8vwRPa4ue7S5xboC0JOrRqzjTj91rbF80mfFU61KEqj+299+zxJNTwNja1jGhrGANa0aAAtTlnFjoKoaoy7+Eh3gt2upaUWOCZh9uKRu1hCy4S6Mk95qzjeLjuZ5/RYjlWS6dnLrUSDIL1jT87vuFXWqTyC9YU3Sd9wq7FjZj2i4erNrLezfH0RGM4/q6XpRffCptXJnH9XTdKL8QKm1ay7snxfoVMx7VcPcKTZuIcVoRfQbI/wDpu8VGVNs1EN9VM/iQ3dbnjwBVjEu1GT3FfDK9aK3lqqL5x5sNnyjjviZ/WD4KUKDZ2JbqWJnHl7mErEwyvWit5uYp2oze4q1fY4y9wYNLyGjnJuXxbLJqHdKymZrlZ2G/wXQt2VznVHpNR26PEvaNoAAGgAAcwCzRFy51IREQBERAEREAUDzqROfHSsYCXPlc1rRpLi3eU8XBNTMe5j3NBdESWE+ySLiR1KWjU+nNTtqIq9P6lNw2kfyPyXZRRhzwDUvHnv04b/ZbyKToi8znKcnKWs9QhGEVGOoIiLwewtRlVT7pRVLOExPI6QGIdoC264aiPGx7eM1zdouX2MujJPYeZR6Sa2nnpYu0FZyswuc3iuLdhuXxdQctrRf9lzY4IX8eKN21oXacLwRrFy0uRk2OhpjqZh2EjwW8XMVI2k1vZ1NN3inuR57tCPBNIziyPbscVwLbZWw4K6qb/uuO253itSulg7xT3I5matJrezfZCn/qFN0z9wq7VR+RG9aFL9Z/aVeCycy7RcPVmvlvZvj6IjGcf1dN0ovxAqbVyZx/V03Si/ECptWcu7J8X6FXMe1XAKxs0cO9VyazE0dQcT3hVyrYzWQ4aNzveSuOwBvgveOdqD32XM8YFXrrdd8v9Jmq2zuT+dSx/Rlf2tA8VZKqbOpLirY2+7gaOsvce65Z2BV6y7/I0se7UH3eZDVIs30WO0YPoh79jCo6pnmqhxVcj/dwO2ue0eBWviHajJ7jIw0b1oreWwiIucOjCIiAIiIAiIgCIiAIiIAiIgCIiAoTKODc6upZxZpLubESOwrXqR5w6fBaE/8AuBj9sYHe0qOLpaUulTi9yOZqx6NSS3vzLdzZS4qBg4Y5JG9uIfeUuUBzRzXwVEfFkjf/ABMu/sU+WFilatLj5m9hHejDh5FM5x4cNozH3jY3/wDqDe9pUaU2zrw3VMLveQ3dbXn9QUJW1hnejF7jExKtWmt/npNxkaf/AN9J9YPulXmqMyO/f6T60dxV5rOzL748PVmllvZy4+iIxnH9XTdKL8QKm1cmcf1dN0ovxAqbVnLuyfF+hVzHtVwCujN/Dgs+D6Ye/a4qlyr4ychwUdM3hEEV/OWAntJXnMn+2lvPWWr9cnu+eRs1SucGXHaM/wBHAzYwK6lQ2U02Osqna5pBsdh8FBlq/cb3epYzJ/tpb/Q1qsXNHB+9Sa9yZsxHxCrpWvmshuo3P95K7sACuY52oPu8ylgI3rrdd+nqTRERYRvBERAEREAREQBERAEREAREQBERAVZnYguqYZOPFh/hcf1KDqys7cH7Onk1Pew9bbx90qtVv4OV6EfA5/GxtXl48ieZpJrpqlnGjY7Y4j+5WeqgzYzYa/D7yORuy4+Ct9ZuPVqze5Gnl7vQXFldZ3Id6lfyyM7AfBVyrWzqxX0bH8SZvaCPyVUrQwLvRXeZ2OVq74I3GR37/SfWj7pV5qjMjv3+k+tHcVeap5l98eHqXct7OXH0RGM4/q6bpRfiBU2rkzj+rpulF+IFTas5d2T4v0KuY9quB9jZiIaNLiG7TcvQ0LMLWtHstA2C5UPk9DulZTs1ys7HA+CvxQZk9MVxfzwJ8sjolLgvC/uYyG4E6gT2LzxPJje9/Hc520k+Kvq3JcFNUP4sMpHPgN3aqCAXrLFok+B5zN6YLj6H1XRm/hwWdT/TD37Xm7suVLFX3YEO50tOziwxA8+AXr3mT/bS3njLY/rk93n/AMNiiIsc2QiIgCIiAIiIAiIgCIiAIiIAiIgIhnOhxUDne7lY/bew/eVRq8csIN0oalvDuTnDnb5w7lRy2culek1sfmYuYxtVT2rybN3kTNgtClPAZMB/8mlveQrwXn6yZtzngfxJY3dQeCV6BUGZL9UXu+eZYyx/okt/oRnOJFis6o1sMTx1Stv7CVTSvbKaDdKOpZrhk2ht47lRIU+Wv9trf6IgzKNqie7yb9zcZHfv9J9aPulXmqLyO/f6T60dxV6KvmX3x4epYy3s5cfREYzj+rpulF+IFTauTOP6um6UX4gVNqzl3ZPi/Qq5j2q4G/yBhx2hT/RLn7GFXYqkzWQ4q1zvdwPd1l7W9xKttU8wd6ttxdy6NqN9rI/lzNgs+p+kwMHW4BUorazoTYaHD7yVjdl7vBVKrmXK1K+1lLMZXqpbF7mUEWN7WcdzW7TcvQ0TbmtGoAdionJmHdKylZxpWbAb/BXyoMyemK4/ORPli/TJ8F88QiIsw1AiIgCIiAIiIAiIgCIiAIixLxrG1AZIuMzN4wWJqWa0BjWw44pGcdjm7WkLz2RcbtRuXoT/AFjNaoi2osFTUNGhs0gHNiN3YtTLZaZR4My8zjojLidNXTkplHBVws89rZmtDZI3OAdeBdeNYOlUssSFdxGHVaKTdrFHD4iVCTaV7lw5bZRw09PJGx7XTytLGsaQcIO8XOu0XBU+vgCyX3D4eNGNlpPlfESrSu9B2bKrTBPFMBeYpGvu1gHfGy9XtZlow1MYkheHNO1p1OHAVQCNcRoJF+m4kXrxicKq1nezXeSYbFOhdWun3Fl5zLci3EUsbw6Rz2ukwkEMa033HlJ4ORVoiKShRVKHRRFXrOrPpM32RNtMo6sPkv3KRjo3keyCWkO6i0bSrmiqY3MEjXsMZF4eHDDdzrz2l+9dwauBQ4jBxrS6V7PxJ8PjJUY9G114EwzjZQx1UkcMJxRQlxLhoe8729rAHeVD0RWKVNU4KEf4K1Wo6k3KRIs3sWO0YNTN0eepjgO0hXSqlzXNaKqR7vYiI63OH5K1P9UzWsjMJXrW2JGxl0bUb7W/RehzIuITs4wWQkbrG1US8ZovgK+oAiIgCIiAxc8DSurNaDWrkqYyRvLSVlK8oDtS2yBqXTltzlWrno38q6UlG/lQG3ktvlXXfbR1rUPpXriNO5AbZ1sHWuN1rnWtUYHLHcXIDZutV2tQrKFp3d7+CS438t1xUh3MrhqaMSDC4c2scysYav8ARn0nq1MrYqh9an0Vr1oiaLeeQm6z/CF88hN47tgWr16ht5MyuoV9i8UaRFvPIbeO7YE8ht47tgTr1DbyY6hX2c0aNFvPIbeO7YE8ht47tgTr1DbyY6hX2c0aNFvPIbeO7YE8ht47tgTr1DbyY6hX2c0aNFvPIbeO7YE8ht47tgTr1DbyY6hX2c0aNFvPIQ47tgWTLDZfvuJGreCPH0NvJhYCvsXic2SMpiEj+Phbz3X/AJqSNtZ2taaODCAGi4DQAsxEVj16v1ajntNmhT+nTUNhu22wda5W2yda0IhcsxTuURKSKO2zrXZitzl7VGGUr1zx0b+VASuK2+ULuxWo06lEoaN/KtjTUj0BKI52u0LlWuo4HBd+5AZLEtB0gLJEBwupWHgXC+zmFdxEBrH2Q06lwvsQci3KIDQOsPkXE6wuRSREBFnWFydi4nWHyKXL4UBDjYnIsDYp1KZFcbkBEfIp1J5FOpSsrEoCLeRTqTyKdSk5XxARnyKdSeRTqUnC+hARfyKdSeRTqUqWTUBFRYh1LNticilYXIEBFW2Hydi5W2FyKTIgI82wuRcrLEGoLeIgNUyx2jUudlmMH/xd5EB120bBwLlbE0aAFmiAIiID/9k=";
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
  
    window.location.href = "./checkout.html"
}
