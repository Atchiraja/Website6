// Function to add item to cart and store it in localStorage
function addToCart(name, price) {
    // Retrieve existing cart items from localStorage or initialize an empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if the item already exists in the cart
    let existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        // If the item exists, increase its quantity by 1
        existingItem.quantity += 1;
    } else {
        // If the item doesn't exist, add it to the cart with quantity 1
        cart.push({ name: name, price: price, quantity: 1 });
    }

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Display a popup message
    alert(`${name} has been added to your cart!`);
}

// Function to display cart items on the cart page
function displayCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartTable = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;

    // Clear existing table rows
    cartTable.innerHTML = '';

    cartItems.forEach(item => {
        const row = document.createElement('tr');
        const totalItemPrice = item.price * item.quantity;
        totalPrice += totalItemPrice;

        row.innerHTML = `
            <td>${item.name}</td>
            <td>₹${item.price}</td>
            <td>
                <input type="number" value="${item.quantity}" min="1" max="10" onchange="updateQuantity('${item.name}', this.value)">
            </td>
            <td>₹${totalItemPrice}</td>
            <td><button onclick="removeItem('${item.name}')">Remove</button></td>
        `;
        cartTable.appendChild(row);
    });

    totalPriceElement.innerText = totalPrice;
}

// Function to update the quantity of an item in the cart
function updateQuantity(itemName, newQuantity) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart.find(i => i.name === itemName);
    if (item) {
        item.quantity = parseInt(newQuantity);
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart(); // Refresh the cart display
    }
}

// Function to remove an item from the cart
function removeItem(itemName) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.name !== itemName);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart(); // Refresh the cart display
}

// Call displayCart when the cart page loads
window.onload = displayCart;
