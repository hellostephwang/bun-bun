//construct bun object

function Bun(flavor, glazing, quantity, price){
  this.flavor = "Blackberry";
  this.glazing = glazing;
  this.quantity = quantity;
  this.price = price;
}


// Store
cart = [];
// let item = new Bun();
let flavor = "Blackberry";
let glazing = "none";
let quantity = 0;
let price = 0;
let cartCount = 0;


//add glazing
function addGlazing() {
    let selectedGlazing = document.getElementById("select-glazing").value;
    glazing = selectedGlazing;
}

//add quantity and price
function addQuantity() {
    let selectedQuantity = document.getElementById("select-quantity").value;
    quantity = selectedQuantity;
    price = selectedQuantity*2;
}

function addToCart(){
  cartCount ++;
  document.getElementById("cart-count").innerHTML = cartCount;
  let item = new Bun(flavor, glazing, quantity, price);
  cart.push(item);
  sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
  sessionStorage.setItem('cartNumber', cartCount);
}

function onLoad(){

  cart = JSON.parse(sessionStorage.getItem("shoppingCart"));
  if (cart === null) {
    cart=[]
  }
  console.log(cart);
  cartCount = JSON.parse(sessionStorage.getItem("cartNumber"));
  document.getElementById("cart-count").innerHTML = cartCount;
  // document.getElementById("selected-item").innerHTML = bun;

  //iterate to for loop, in every iteration, pick one element, create a row in HTML using element
  //fetch div

  var i;
  for (i = 0; i < cart.length; i++) {
    //add innerHTML
    //innerHTML is a string
    document.getElementById("all-items").innerHTML +=
    `<div class=\"shopping-item shadow\">
    <div class=\"cart-description\">
    <h4 class=\"cart-flavor\">Flavor: <span id=\"cartFlavor\">` +
    cart[i].flavor +
    `</span></h4>
    <h4 class=\"cart-price\">Price: $<span id=\"cartPrice\">` +
    cart[i].price +
    `</span></h4>
    <div class=\"cart-glazing\">
    <h4 class=\"cart-glazing-header\">Glazing: <span id=\"cartGlazing\">` +
    cart[i].glazing  +
    `</span></h4>
          </div>
          <div class=\"cart-quantity\">
             <h4 class=\"cart-quantity-header\">Quantity: <span id=\"cartQuantity\">` +
    cart[i].quantity +
    `</span></h4>
          </div>
           <button onclick=\"deleteItem(this.parentNode)\" class=\"btn-remove\">Remove From Cart</button>
      </div>
    </div>`;

  }

}

function deleteItem(item) {
  cartCount --;
  document.getElementById("cart-count").innerHTML = cartCount;
  item.parentNode.removeChild(item);
  sessionStorage.clear();
}

//Product detail Fact tabs
function openFacts(evt, Fact) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(Fact).style.display = "block";
  evt.currentTarget.className += " active";
}
