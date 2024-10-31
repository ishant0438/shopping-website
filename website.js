// script.js
let cart = [];
let totalPrice = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    totalPrice += price;
    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";  // Clear previous items

    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        li.innerHTML += ` <button onclick="removeFromCart(${index})">Remove</button>`;
        cartItems.appendChild(li);
    });

    document.getElementById("total-price").textContent = totalPrice;
}

function removeFromCart(index) {
    totalPrice -= cart[index].price;
    cart.splice(index, 1);
    displayCart();
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Thank you for your purchase!");
        cart = [];
        totalPrice = 0;
        displayCart();
    }
}
