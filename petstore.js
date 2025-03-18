document.addEventListener("DOMContentLoaded", function () {
    const productList = document.getElementById("product-list");
    const cartList = document.getElementById("cart-list");
    const totalPriceEl = document.getElementById("total-price");
    const checkoutBtn = document.getElementById("checkout-btn");

    let cart = [];

    const products = [
        { id: 1, name: "Dog Food", price: 20.00, image: "dogfood.jpg" },
        { id: 2, name: "Cat Toy", price: 10.00, image: "th.jpg" },
        { id: 3, name: "Pet Shampoo", price: 15.00, image: "shampoo.jpg" },
        { id: 4, name: "Bird Cage", price: 50.00, image: "bird.jpg" }
    ];

    function displayProducts() {
        products.forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("col-md-3");
            productCard.innerHTML = `
                <div class="card">
                    <img src="${product.image}" alt="${product.name}">
                    <h5>${product.name}</h5>
                    <p>$${product.price.toFixed(2)}</p>
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            `;
            productList.appendChild(productCard);
        });
    }

    window.addToCart = function (id) {
        const product = products.find(p => p.id === id);
        cart.push(product);
        updateCart();
    };

    function updateCart() {
        cartList.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            total += item.price;

            const cartItem = document.createElement("li");
            cartItem.classList.add("list-group-item");
            cartItem.innerHTML = `
                ${item.name} - $${item.price.toFixed(2)}
                <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
            `;
            cartList.appendChild(cartItem);
        });

        totalPriceEl.innerText = total.toFixed(2);
    }

    window.removeFromCart = function (index) {
        cart.splice(index, 1);
        updateCart();
    };

    checkoutBtn.addEventListener("click", function () {
        if (cart.length === 0) {
            alert("Your cart is empty!");
        } else {
            alert("Checkout successful!");
            cart = [];
            updateCart();
        }
    });

    displayProducts();
});
