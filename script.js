

let total = 0;
function orderItem(item, price){
    total += price;
    document.getElementById('total').textContent = total;  

}

document.getElementById('orderList').innerHTML += `<li>${item} - $${price}</li>`;