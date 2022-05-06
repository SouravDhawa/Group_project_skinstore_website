function head(){
    return `
    <div id="top_head">
    <div>
        <h1>SkinStore</h1>
        <h6>part of the LOOKFANTASTIC group</h6>
    </div>
    <div>
       <span> <input type="text" id="query" placeholder="search for product or brand " ><i id="search_icon" class="fa-solid fa-magnifying-glass"></i></span>
    </div>
    <div id="side_nav">
        
         <ul>
             <li>
                 <a href="">Account</a>
                 <ul>
                     <li>
                         <a href=""><button id="login">LOGIN</button></a>
                     </li>
                     <li><br>
                         <a href=""><button id="register">REGISTER</button></a>
                     </li>
                     <li>
                         <a href="">Wish list</a>
                     </li>
                     <li>
                         <a href="">Your Order</a>
                     </li>
                     <li>
                         <a href="">Your referals</a>
                     </li>
                 </ul>
             </li>
             <li>
                 <a href="">cart</a>
                 <ul>
                     <li>
                         <a href="">Ther are currently no item in your cart</a>
                     </li>
                 </ul>
             </li>
         </ul>
       
    </div>
</div><br><br><br><br><br><br><br>
<hr>


<div id="drop_down_menue">
<div class="wrapper">
<nav>
    <ul>
        <li class="drpdown"><a href="">Brands</a>
            <ul class="menu-area">
                <ul>
                    <h4>Brands</h4>
                    <li><a href="#">A to z Brands</a></li>
                </ul>
            </ul>
        </li>
        <li class="drpdown"><a href="">Sale</a></li>
        <li class="drpdown"><a href="">Mothers Day</a>
            <ul class="menu-area">
            <ul>
                <h4>Shop by price</h4>
                <li><a href="#">Under $50</a></li>
                <li><a href="#">Under $100</a></li>
                <li><a href="#">Luxury Gifts</a></li>
                <li><a href="#">Fragrance Gifts</a></li>
                <li><a href="#">Gifts And sets</a></li>
                <li><a href="#">At home spa</a></li>
            </ul>
        </ul>
        </li>
        <li class="drpdown">
            <a href="">Build a routine</a>
            <ul class="menu-area">
            <ul>
                <h4>Skin type routine</h4>
                <li><a href="./index.html">Dry skinn routine</a></li>
                <li><a href="">Normal skin routine</a></li>
                <li><a href="">Only skin routine</a></li>
                <li><a href="">Combination skin routine</a></li>
                <li><a href="">Sensitive skin routine</a></li>
                
            </ul>
            <ul>
                <h4>Skin concern routine</h4>
                <li><a href="">Acne routine</a></li>
                <li><a href="">Fine Lines & Wrinkles Routine</a></li>
                <li><a href="">Dark Spots & Discoloration Routine</a></li>
                <li><a href="">Redness & Rosacea Routine</a></li>
                <li><a href="">Dullness & Brightening Routine</a></li>
               
            </ul>
            <ul>
                <h4>Build a haire Routine</h4>
                <li><a href="">Fine training haire routine</a></li>
                <li><a href="">Healthy Scalp Routine</a></li>
                <li><a href="">Colored Hair Routine</a></li>
                <li><a href="">Dry, Damaged Hair Routine</a></li>
                <li><a href="">Oily Hair Routine</a></li>
                <li><a href="">Hair Styling Routine</a></li>
                <li><a href=""></a></li>
            </ul>
        </ul>
    </li>

    <li class="drpdown"><a href="">Skin care</a>
        <ul class="menu-area">
            <ul>
                <h4>Popular Categories</h4>
                <li><a href="">View All Skin Care</a></li>
                <li><a href="">New In</a></li>
                <li><a href="">Clean Skincare</a></li>
            </ul>
            <ul>
                <h4>By Product Type</h4>
                <li><a href="">Cleansers</a></li>
                <li><a href="">Moisturizers</a></li>
                <li><a href="">Serums</a></li>
                <li><a href="">Eye Serum</a></li>
                <li><a href="">Eye Care</a></li>
               
            </ul>
            <ul>
                <h4>By Ingredient</h4>
                <li><a href="">Vitamin C</a></li>
                <li><a href="">AHA</a></li>
                <li><a href="">Caffeine</a></li>
                <li><a href="">Retinol</a></li>
                <li><a href="">Lactic Acid</a></li>
                <li><a href="">Glycolic Acid</a></li>
                <li><a href="">Azelaic Acid</a></li>
            </ul>
            <ul>
                <h4>By Specific Concern</h4>
                <li><a href="">Acne & Blemishes</a></li>
                <li><a href="">Fine Lines & Wrinkles</a></li>
                <li><a href="">Dark Circles</a></li>
                <li><a href="">Dry Skin</a></li>
                <li><a href="">Pregnancy Skincare</a></li>
                <li><a href="">Sensitive Skin</a></li>
            </ul>
            <ul>
                <h4>Sunscreen & Suncare</h4>
                <li><a href="">After Sun</a></li>
                <li><a href="">Tinted</a></li>
                <li><a href="">Mineral</a></li>
                <li><a href="">Eye Protection</a></li>
            </ul>
        </ul>
    </li>
    <li class="drpdown"><a href="">Hair</a></li>
    <li class="drpdown"><a href="">Makeup</a>
        <ul class="menu-area">
            <ul>
                <h4>Popular Categories</h4>
                <li><a href="">View All Cosmetics</a></li>
                <li><a href="">New In</a></li>
                <li><a href="">Clean Makeup</a></li>
            </ul>
            <ul>
                <h4>Eyes</h4>
                <li><a href="">Eye Liners</a></li>
                <li><a href="">Lash & Brow Enhancers</a></li>
                <li><a href="">Eye Shadows</a></li>
                <li><a href="">Mascaras</a></li>
                <li><a href="">Brow Pencils</a></li>
               
            </ul>
            <ul>
                <h4>Face</h4>
                <li><a href="">BB & CC Cream</a></li>
                <li><a href="">Blushers</a></li>
                <li><a href="">Bronzers</a></li>
                <li><a href="">Color Correctors</a></li>
                <li><a href="">Concealers</a></li>
                <li><a href="">Contour</a></li>
                <li><a href="">Face Powders</a></li>
            </ul>
            <ul>
                <h4>Lips</h4>
                <li><a href="">Lipsticks</a></li>
                <li><a href="">Lip Balms</a></li>
                <li><a href="">Lip Glosses</a></li>
                <li><a href="">Lip Liners</a></li>
                <li><a href="">Lip Plumpers</a></li>
                <li><a href="">Liquid Lipsticks</a></li>
            </ul>
        </ul>
    </li>
    <li class="drpdown"><a href="">Self-Care</a>
        <ul class="menu-area">
            <ul>
                <h4>Popular Categories</h4>
                <li><a href="">View All Fragrance</a></li>
                <li><a href="">New In</a></li>
                <li><a href="">At-Home Spa</a></li>
                <li><a href="">View All Wellness Products</a></li>
            </ul>
            <ul>
                <h4>Sexual Wellness</h4>
                <li><a href="">Devices</a></li>
                <li><a href="">Skin Care</a></li>
            </ul>
            <ul>
                <h4>Supplements</h4>
                <li><a href="">Skin</a></li>
                <li><a href="">Hair</a></li>
                <li><a href="">Immune Boosting</a></li>
                <li><a href="">Health & Wellbeing</a></li>
                <li><a href="">Weight Loss</a></li>
            </ul>
            <ul>
                <h4>Clean Beauty</h4>
                <li><a href="">Clean Skincare</a></li>
                <li><a href="">Clean Haircare</a></li>
                <li><a href="">Clean Makeup</a></li>
                <li><a href="">Clean Bath & Body</a></li>
            </ul>
        </ul>
    </li>
    </ul>
</nav>
</div>
<br><br><br>

<div id="reffer">
    <div id="reffer_div">
        <div><i class="fa-solid fa-truck"></i><p> FREE US Shipping Over $49</p></div>
        <div><i class="fa-solid fa-coins"></i><p> Refer a Friend, Get $15</p></div>
        <div><i class="fa-solid fa-battery-quarter"></i><p>New Customers Save 20% - Use Code NEWBIE</p></div>
        <div><i class="fa-solid fa-check"></i><p>Free Beauty Consultations</p></div>
    </div>
</div>
<div id="offer_div">
    <h3>Up to 30% off with code COUNTDOWN + 11-Piece Beauty Bag (worth $87) @ $150 | SHOP NOW Homepage Spring refresh—edit your AM & PM routine for your best skin yet. SHOP NOW
        </h3>
</div>
    `
}

export default head