<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple E-Commerce Audio Product Page - Array of Objects/Objects</title>
    <script src="script.js" defer></script>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
   <div class="header">
      <div class="logo">Audio Store</div>
     <button class="cart-btn" onclick="toggleCart()">
            Cart
            <span class="cart-count" id="cartCount">0</span>
        </button>
    </div>

    <div class="hero">
      <h1>Premium Audio Products</h1>
      <p>Quality sound for everyone</p>
    </div>

    <div class="products-grid" id="productsGrid"></div>

      <div class="cart-modal" id="cartModal">
        <div class="cart-content">
            <div class="cart-header">Your Cart</div>
            <div id="cartItems"></div>
            <div class="cart-total">
                <span>Total:</span>
                <span id="cartTotal">$0</span>
            </div>
            <button class="close-btn" onclick="toggleCart()">Close</button>
        </div>
    </div>
    </div>

      

    
</body>
</html>

* {
margin: 0;
padding: 0;
box-sizing: border-box;
}
body {
font-family: Arial, sans-serif;
background: #f5f5f5;
color: #333;
}
.header {
background: #fff;
padding: 20px;
border-bottom: 1px solid #ddd;
display: flex;
justify-content: space-between;
align-items: center;
}
.logo {
font-size: 24px;
font-weight: bold;
}
.cart-btn {
background: #333;
color: #fff;
border: none;
padding: 10px 20px;
cursor: pointer;
position: relative;
}
.cart-count {
position: absolute;
top: -8px;
right: -8px;
background: #e74c3c;
color: #fff;
width: 20px;
height: 20px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size: 12px;
}
.hero {
background: #333;
color: #fff;
padding: 40px 20px;
text-align: center;
}
.hero h1 {
font-size: 32px;
margin-bottom: 10px;
}
.products-grid {
padding: 40px 20px;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
gap: 20px;
max-width: 1200px;
margin: 0 auto;
}
.product-card {
background: #fff;
border: 1px solid #ddd;
padding: 20px;
}
.product-icon {
font-size: 60px;
text-align: center;
padding: 30px 0;
background: #f9f9f9;
margin-bottom: 15px;
}
.product-badge {
display: inline-block;
background: #e74c3c;
color: #fff;
padding: 4px 8px;
font-size: 10px;
margin-bottom: 10px;
}
.product-category {
color: #999;
font-size: 12px;
text-transform: uppercase;
margin-bottom: 5px;
}
.product-name {
font-size: 20px;
font-weight: bold;
margin-bottom: 10px;
}
.product-description {
color: #666;
font-size: 14px;
margin-bottom: 15px;
line-height: 1.5;
}
.product-footer {
display: flex;
justify-content: space-between;
align-items: center;
}
.product-price {
font-size: 24px;
font-weight: bold;
color: #e74c3c;
}
.add-btn {
background: #333;
color: #fff;
border: none;
padding: 10px 15px;
cursor: pointer;
font-size: 12px;
}
.add-btn:hover {
background: #555;
}
.cart-modal {
display: none;
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: rgba(0,0,0,0.5);
align-items: center;
justify-content: center; /* cenereted because its flex */
}
.cart-modal.active {
display: flex;
}
.cart-content {
background: #fff;
padding: 30px;
width: 90%;
max-width: 500px;
max-height: 80vh;
overflow-y: auto;
}
.cart-header {
font-size: 24px;
font-weight: bold;
margin-bottom: 20px;
}
.cart-item {
padding: 15px 0;
border-bottom: 1px solid #ddd;
}
.cart-item-name {
font-weight: bold;
margin-bottom: 5px;
}
.cart-item-price {
color: #e74c3c;
font-size: 18px;
}
.cart-total {
margin-top: 20px;
padding-top: 20px;
border-top: 2px solid #333;
display: flex;
justify-content: space-between;
font-size: 20px;
font-weight: bold;
}
.close-btn {
margin-top: 20px;
width: 100%;
background: #333;
color: #fff;
border: none;
padding: 12px;
cursor: pointer;
font-size: 14px;
}



// Array of product objects
 
const products = [
            {
                id: 1,
                name: "PHANTOM X",
                category: "headphones",
                price: 349,
                description: "Wireless noise-cancelling headphones with premium sound quality",
                icon: "🎧",
                badge: "BEST SELLER"
            },
            {
                id: 2,
                name: "WAVE PRO",
                category: "speakers",
                price: 599,
                description: "High-fidelity bluetooth speaker with 360° sound",
                icon: "🔊",
                badge: "NEW"
            },
            {
                id: 3,
                name: "PULSE MINI",
                category: "earbuds",
                price: 179,
                description: "True wireless earbuds with active noise cancellation",
                icon: "🎵",
                badge: "HOT"
            },
            {
                id: 4,
                name: "SONIC ELITE",
                category: "headphones",
                price: 499,
                description: "Studio-grade over-ear headphones for professionals",
                icon: "🎧",
                badge: "PRO"
            },
            {
                id: 5,
                name: "BASS BOOM",
                category: "speakers",
                price: 299,
                description: "Portable speaker with powerful bass and 20hr battery",
                icon: "🔊",
                badge: null
            },
            {
                id: 6,
                name: "AIR PODS+",
                category: "earbuds",
                price: 149,
                description: "Lightweight wireless earbuds with crystal clear sound",
                icon: "🎵",
                badge: "SALE"
            },
            {
                id: 7,
                name: "CABLE PREMIUM",
                category: "accessories",
                price: 49,
                description: "Gold-plated audio cable for audiophile-grade connection",
                icon: "🔌",
                badge: null
            },
            {
                id: 8,
                name: "STUDIO RACK",
                category: "accessories",
                price: 89,
                description: "Premium headphone stand with USB charging ports",
                icon: "📱",
                badge: null
            },
            {
                id: 9,
                name: "THUNDER SUB",
                category: "speakers",
                price: 799,
                description: "Wireless subwoofer with deep bass response",
                icon: "🔊",
                badge: "PREMIUM"
            },
            {
                id: 10,
                name: "ECHO MAX",
                category: "headphones",
                price: 429,
                description: "Premium wireless headphones with spatial audio",
                icon: "🎧",
                badge: null
            },
            {
                id: 11,
                name: "VIBE 360",
                category: "speakers",
                price: 399,
                description: "Smart speaker with voice assistant and multi-room audio",
                icon: "🔊",
                badge: null
            },
            {
                id: 12,
                name: "MINI BEATS",
                category: "earbuds",
                price: 99,
                description: "Compact wireless earbuds perfect for workouts",
                icon: "🎵",
                badge: "BUDGET"
            }
        ];

let cart =[];

//function to display all produts
function displayProducts() {

    console.log(products);
    const grid = document.getElementById('productsGrid');
    let html = "";

// loop through products array and create HTML for each

for (let i = 0; i < products.length; i++){
    const product = products[i]; //have 0th item


    html += `
        <div class ="product-card">
         ${product.badge} 
            <div class ="product-icon"> ${product.icon} </div>
            <div class ="product-category"> ${product.category} </div>
            <div class="product-name"> ${product.name} </div>
            <div class ="product-description"> ${product.description} </div>

            <div class="product-footer">
                <div class="product-price">$${product.price}</div>
                <button class="add-btn" onclick="addToCart(${product.id})">
                Add to Cart
                </button>
            </div>





        </div>
    
    
    
    `;
}
grid.innerHTML= html;
}

// function addToCart()
function addToCart(productId){ // addToCart Id will be passed in here ad if equal to product[i].id it will...
    //finds the product in the arrat
    let selectedProduct = null; //returns the object

    for(let i=0; i < products.length; i++) {
        if(products[i].id === productId){
            selectedProduct = products[i];
            break;
        }
    }
// if the selected product
if(selectedProduct){
    // check if product already exists in cart
    let existingItem = null;

    for(let i = 0; i< cart.length; i++) {
        if(cart[i].id === productId){
            existingItem = cart[i];
            break;
        }
    }

    if(existingItem){
        existingItem.quantity++;
    }else{
        cart.push({
                id: selectedProduct.id,
                name: selectedProduct.name,
                price: selectedProduct.price,
                quantity:1
            });
            console.log(cart);
        } 

        updateCartDisplay();
    }
}
//function updateCartDisplay/ job is to increase the cart count

function updateCartDisplay(){
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    // shoul dbe able to calculate total items
    let totalItems = 0; //initialize with 0 value
    for(let i=0; i<cart.length; i++){
        totalItems+= cart[i].quantity;
    }

    cartCount.textContent = totalItems;
    // display cart items
    if(cart.length === 0){
        cartItems.innerHTML =`

                <div style="text-align:center; padding: 40px; color:#999;"> Your Cart is Empty. </div>
    `;

    cartTotal.textContent = '$0';
    return;
    }

    let cartHTML= '';
    let total = 0;
    for(let i=0; i<cart.length; i++){
        const item = cart[i];
        const itemTotal = item.price * item.quantity;
        console.log(itemTotal);
        total += itemTotal;
        console.log(total);

    cartHTML += `
            <div class="cart-item">
                <div class="cart-item-name">${item.name} x${item.quantity} </div>
                <div class="cart-item-price">${itemTotal} </div>


            </div>
        `;
    }
    
    cartItems.innerHTML = cartHTML;
    cartTotal.textContent = `$${total}`;
}


//function toggleCart()
//this function toggles the cart modal

function toggleCart(){

    const modal = document.getElementById('cartModal');
    if(modal.classList.contains("active")){
        modal.classList.remove("active");
    }else{
        modal.classList.add("active");
    }

}
displayProducts();
//draw connections



