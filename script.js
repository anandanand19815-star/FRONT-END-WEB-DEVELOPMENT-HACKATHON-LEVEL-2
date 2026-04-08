let cart = [];
let total = 0;

function addItem(name, price) {
    cart.push({name, price});
    total += price;
    displayCart();
}

function removeItem(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    displayCart();
}

function displayCart() {
    let cartBox = document.getElementById("cart");
    cartBox.innerHTML = "";

    cart.forEach((item, index) => {
        cartBox.innerHTML += `
            <div class="cart-item">
                ${item.name} - ₹${item.price}
                <button onclick="removeItem(${index})">X</button>
            </div>
        `;
    });

    document.getElementById("total").innerText = total;
}

function resetCart() {
    cart = [];
    total = 0;
    displayCart();
}