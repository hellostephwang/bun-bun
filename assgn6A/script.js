
//change picture based on glazing
var pictureList = [
    "assets/blackberry-vert.jpg",
    "assets/blackberry-sugar-milk.jpg",
    "assets/blackberry-vanilla.jpg",
    "assets/blackberry-double-chocolate.jpg"];

$('#glaze').change(function () {
    var val = parseInt($('#glaze').val());
    $('.product-image-1').attr("src",pictureList[val]);

});



//change price when quantity changes
//will always add after clicking the number

var quant = 0;

$('#quant-one').click(function(){
    $('#product-price').text('1 for $2.99');
    quant += 1;
});

$('#quant-three').click(function(){
    $('#product-price').text('3 for $4.99');
    quant += 3;
});

$('#quant-six').click(function(){
    $('#product-price').text('6 for $7.99');
    quant += 6;
});

$('#quant-twelve').click(function(){
    $('#product-price').text('12 for $13.99');
    quant += 12;
});

// increase cart number by 1 when clicking add to cart
$('#addToCart').click(function() {
    $('.total-count').html(quant);
});

// increase cart number by 1 when clicking add to cart
// $('#addToCart').click(function() {
//     $('.total-count').html(function(i, val) { return val*1+1 });
// });


/* Variables
---------------*/

// let flavors = ["Original", "Blackberry"]
// let images = ['assets/oiginal.jpg', 'assets/blackberry.jpg']
// let cart =[]

/* Object Constructors
---------------*/

//construct a bun

// function bunBun(img, name, glazing, quantity, price) {
//   this.img = img;
//   this.name = name;
//   this.glazing = glazing;
//   this.quantity = quantity;
//   this.price = price;
//
// }

// construct a cart
// function cart() {
//   this.buns = [];
// }


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
