const navbar = () => {
  return `
    <div id="first_nav">
    <div id="top">
    <i class="fa-solid fa-gift"></i>
    <div id="sec1">
        <p>Pick Any Product at Rs 199</p>
        <h4>Show Now</h4>
    </div>
    </div>
    <div id="top">
    <i class="fa-solid fa-store"></i>
    <div id="sec1">
    <a href="./AdminPanel/AdminDashboard.html"><p>Be Pretty Admin Panel</p></a>
</div>
    </div>
    </div>

    <div id="second_nav">
    <div id="img">
    <img src="./Logo and Icon/Be Pretty 2.png" />
    <div id="Search_inp">
    <input type="text" id="Asearch"  placeholder="Search ...Lipstick, Eyeliner, Makeup Tutorial, etc" />
    <input type="submit" id="Asearch_button"></input>

    </div>
    </div>
    <div id="user">
    <a href="./cart.html"><i class="fa-solid fa-cart-shopping"></i></a>
    |
    <a href="./signin.html"><i class="fa-regular fa-user"></i></a>
    </div>
    </div>

        <hr id="hr_line">
    <nav>
        <div class="wrapper">
        <input type="radio" name="slider" id="menu-btn">
        <input type="radio" name="slider" id="close-btn">
        <ul class="nav-links">
            <label for="close-btn" class="btn close-btn"><i class="fas fa-times"></i></label>
            <li>
                <a href="./index.html" class="desktop-item">HOME</a>
                <input type="checkbox" id="showMega">
                <label for="showMega" class="mobile-item">HOME</label>
            </li>
            <li>
                <a href="#" class="desktop-item">MAKEUP</a>
                <input type="checkbox" id="showMega">
                <label for="showMega" class="mobile-item">MAKEUP</label>
                <div class="mega-box">
                    <div class="content">
                        <div class="row">
                            <header>LIPS</header>
                            <ul class="mega-links">
                            <li><a href="./Lipstick.html">Lipstick</a></li>
                            <li><a href="./Lipstick.html">Crayon Lipstick</a></li>
                            <li><a href="./Lipstick.html">Liquid Lipstick</a></li>
                            <li><a href="./Lipstick.html">Hi-Shine Lipstick</a></li>
                            <li><a href="./Lipstick.html">Matte Lipstick</a></li>
                            <li><a href="./Lipstick.html">Lip Gloss</a></li>
                            <li><a href="./Lipstick.html">Lip Liner</a></li>
                            <li><a href="./Lipstick.html">Lip Balm</a></li>
                            <li><a href="./Lipstick.html">Lip Glitter</a></li>
                            <li><a href="./Lipstick.html">Lip Stain</a></li>
                            <li><a href="./Lipstick.html">Lipstick Set</a></li>
                            <li><a href="./Lipstick.html">Lip Kit</a></li>
                            <li><a href="./Lipstick.html">Find Your Lipstick</a></li>
                            </ul>
                        </div>    
                        <div class="row">
                            <header>FACE</header>
                            <ul class="mega-links">
                            <li><a href="./facewash.html">Face wash</a></li>
                            <li><a href="./facewash.html">Primer</a></li>
                            <li><a href="./facewash.html">Concealer</a></li>
                            <li><a href="./facewash.html">Foundation</a></li>
                            <li><a href="./facewash.html">Compact Powder</a></li>
                            <li><a href="./facewash.html">Setting Powder</a></li>
                            <li><a href="./facewash.html">Banana Powder</a></li>
                            <li><a href="./facewash.html">sindoor</a></li>
                            <li><a href="./facewash.html">Highligher</a></li>
                            <li><a href="./facewash.html">Blush</a></li>
                            <li><a href="./facewash.html">Bronzer</a></li>
                            <li><a href="./facewash.html">Cheek Stain</a></li>
                            </ul>
                        </div>
                        <div class="row">
                            <header>EYES</header>
                            <ul class="mega-links">
                            <li><a href="#">Eye Shadow</a></li>
                            <li><a href="#">Eyeliner</a></li>
                            <li><a href="#">Eyebrows</a></li>
                            <li><a href="#">Glitter</a></li>
                            <li><a href="#">Mascara</a></li>
                            <li><a href="#">Kajal</a></li>
                            <li><a href="#">Eye Combos</a></li>
                            </ul>
                        </div>
                        <div class="row">
                            <header>NAILS</header>
                            <ul class="mega-links">
                            <li><a href="#">Nail Lacquer</a></li>
                            <li><a href="#">Nail Polish</a></li>
                            <li><a href="#">Matte Nail Polish</a></li>
                            </ul>
                            <br></br>
                            <header>KITS AND COMBOS</header>
                            <ul class="mega-links">
                            <li><a href="#">Makeup Kits</a></li>
                            <li><a href="#">Bridal Makeup Kits</a></li>
                            <li><a href="#">Makeup Gift Sets</a></li>
                            </ul>
                            <br></br>
                            <header>MAKEUP ACCESSORIES</header>
                            <ul class="mega-links">
                            <li><a href="#">Makeup Brushes</a></li>
                            <li><a href="#">Eyeshadow Brushes</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <a href="#" class="desktop-item">HAIR CARE</a>
                <input type="checkbox" id="showMega">
                <label for="showMega" class="mobile-item">HAIR CARE</label>
                <div class="mega-box">
                    <div class="content">
                        <div class="row">
                            <header>HAIR CARE</header>
                            <ul class="mega-links">
                            <li><a href="./shampoo.html">Shampoo</a></li>
                            <li><a href="./shampoo.html">Conditioner</a></li>
                            <li><a href="./shampoo.html">Hair Oil</a></li>
                            <li><a href="./shampoo.html">Serum</a></li>
                            <li><a href="./shampoo.html">Hair Mask Spray</a></li>
                            <li><a href="./shampoo.html">Combos</a></li>
                            </ul>
                        </div>           
                    </div>
                </div>
            </li>
            <li>
                <a href="#" class="desktop-item">SKINCARE</a>
                <input type="checkbox" id="showMega">
                <label for="showMega" class="mobile-item">SKINCARE</label>
                <div class="mega-box">
                    <div class="content">
                        <div class="row">
                            <ul class="mega-links">
                            <li><a href="./cream.html">Moisturizer</a></li>
                            <li><a href="./cream.html">Night Cream</a></li>
                            <li><a href="./cream.html">Eye Cream</a></li>
                            <li><a href="./cream.html">Body Lotion</a></li>
                            <li><a href="./cream.html">Serum</a></li>
                            <li><a href="./cream.html">Sunscreen</a></li>
                            <li><a href="./cream.html">Skincare Kits</a></li>
                            </ul>
                            <br></br>
                            <header>CLEANSING PRODUCTS</header>
                            <ul class="mega-links">
                            <li><a href="#">Cleanser</a></li>
                            <li><a href="#">Face Wash</a></li>
                            <li><a href="#">Exfoliator & Scrub</a></li>
                            </ul>
                            <br></br>
                            <header>MASK</header>
                            <ul class="mega-links">
                            <li><a href="#">Sheet Mask</a></li>
                            <li><a href="#">Face Pack</a></li>
                            </ul>
                        </div>    
                    </div>
                </div>
            </li>
            <li>
                <a href="#" class="desktop-item">SANITIZING CARE</a>
                <input type="checkbox" id="showMega">
                <label for="showMega" class="mobile-item">SANITIZING CARE</label>
                <div class="mega-box">
                    <div class="content">
                        <div class="row">
                          <header>SANITIZING CARE</header>
                            <ul class="mega-links">
                            <li><a href="#">Sanitizing Wipes</a></li>
                            <li><a href="#">Hand Sanitizer</a></li>
                            <li><a href="#">Sanitizing Kits</a></li>
                            <li><a href="#">Sanitizing Spray</a></li>
                            </ul>
                        </div>    
                    </div>
                </div>
            </li>
            <li>
                <a href="#" class="desktop-item">COLLECTION</a>
                <input type="checkbox" id="showMega">
                <label for="showMega" class="mobile-item">COLLECTION</label>
                <div class="mega-box">
                    <div class="content">
                        <div class="row">
                            <header>SHOP BY COLLECTION</header>
                            <ul class="mega-links">
                            <li><a href="#">MyGlamm</a></li>
                            <li><a href="#">SUPERFOODS</a></li>
                            <li><a href="#">Treat Love Care</a></li>
                            <li><a href="#">Clean Beauty</a></li>
                            <li><a href="#">POPxo</a></li>
                            <li><a href="#">WIPEOUT</a></li>
                            <li><a href="#">GLOW Iridescent Brightening Skincare</a></li>
                            <li><a href="#">Manish Malhotra</a></li>
                            <li><a href="#">YOUTHfULL</a></li>
                            <li><a href="#">LIT Collection</a></li>
                            <li><a href="#">POSE</a></li>
                            <li><a href="#">K.Play</a></li>
                            <li><a href="#">Just Dropped</a></li>
                            </ul>
                        </div>    
                    </div>
                </div>
            </li>
            <li>
                <a href="#" class="desktop-item">REWARDS</a>
                <input type="checkbox" id="showMega">
                <label for="showMega" class="mobile-item">REWARDS</label>
                <div class="mega-box">
                    <div class="content">
                        <div class="row">
                            <ul class="mega-links">
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            </ul>
                        </div>    
                    </div>
                </div>
            </li>
            <li>
            <a href="#" class="desktop-item">BEPRETTY</a>
            <input type="checkbox" id="showMega">
            <label for="showMega" class="mobile-item">BEPRETTY</label>
            <div class="mega-box">
                <div class="content">
                    <div class="row">
                        <ul class="mega-links">
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        </ul>
                    </div>    
                </div>
            </div>
        </li>
        </ul>
    </div>`;
};

export { navbar };
