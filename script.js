var total = 0; // Initialize total variable outside the function

/*function orderItem(item, price){
    total += price;
    document.getElementById('orderList').innerHTML += `<li>${item} - $${price}</li>`;
    document.getElementById('total').textContent = total.toFixed(2); // Use toFixed to display total with two decimal places
    document.getElementById('totaldisplay').textContent = total.toFixed(2); // Update totaldisplay with the new total
    return;
}

function redirectMeal(){
    window.location.href = "index.html"; 
}

function redirectSnack(){
        window.location.href = "snacks.html"; 
}

function redirectDrink(){
  window.location.href = "drinks.html";
}

let total = 0;
let items = [];

function orderItem(item, price) {
  total += price;
  /*items.push({ item: item, price: price });
  document.getElementById('orderList').innerHTML += `<li>${item} - $${price}</li>`;
  document.getElementById('total').textContent = total;
}

function redirectToCheckout() {
  // Store total and items in sessionStorage
  sessionStorage.setItem('total', total);
  sessionStorage.setItem('items', JSON.stringify(items));

  // Redirect to checkout.html
  window.location.href = 'checkout.html';
}**/

function redirectMeal(){
  window.location.href = "index.html"; 
}

function redirectSnack(){
  var fulltotal = document.getElementById("total").innerHTML;
  localStorage.setItem("fulltotalests", fulltotal);
  window.location.replace("snacks.html");
}

function redirectDrink(){
  var fulltotal = document.getElementById("total").innerHTML;
  localStorage.setItem("fulltotalests", fulltotal);
  window.location.href = 'drinks.html';
}

total = 0;
let items = [];

function orderItem(item, price) {
  total += price;
  items.push({ item: item, price: price });
  document.getElementById('orderList').innerHTML += `<li>${item} - $${price}</li>`;
  document.getElementById('total').textContent = total;
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ item, price });
  localStorage.setItem('cart', JSON.stringify(cart));
}


function redirectToCheckout() {
  // Store total and items in sessionStorage
  sessionStorage.setItem('total', total);
  sessionStorage.setItem('items', JSON.stringify(items));

  // Redirect to checkout.html
  window.location.href = "checkout.html";
}