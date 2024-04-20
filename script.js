var total = 0;

function redirectMeal(){
  var fulltotal = document.getElementById("total").innerHTML;
  var ordertotal = document.getElementById("orderList").innerHTML;
  localStorage.setItem("fullorderList", ordertotal);
  window.location.href = "index.html"; 
  localStorage.setItem("fulltotalests", fulltotal);
}

function redirectSnack(){
  var fulltotal = document.getElementById("total").innerHTML;
  var ordertotal = document.getElementById("orderList").innerHTML;
  localStorage.setItem("fullorderList", ordertotal);
  localStorage.setItem("fulltotalests", fulltotal);
  window.location.replace("snacks.html");
}

function redirectDrink(){
  var fulltotal = document.getElementById("total").innerHTML;
  var ordertotal = document.getElementById("orderList").innerHTML;
  localStorage.setItem("fullorderList", ordertotal);
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
  window.location.href = 'checkout.html';
}