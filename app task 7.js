const form = document.getElementById("orderForm");
const ordersDiv = document.getElementById("orders");

const prices = {
    espresso: 45,
    latte: 65,
    croissant: 40
};

form.addEventListener("submit", function (e) {
    e.preventDefault();


    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const product = document.getElementById("product").value;
    const quantity = Number(document.getElementById("quantity").value);


    document.getElementById("nameError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("productError").textContent = "";
    document.getElementById("quantityError").textContent = "";

    
    let hasError = false;

    if (name === "" || name.length < 3) {
        document.getElementById("nameError").textContent = "name is required and must be at least 3 characters";
        hasError = true;
    }

    const phoneRegex = /^01[0-9]{9}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById("phoneError").textContent = "phone must be 11 digits and start with 01";
        hasError = true;
    }

    if (product === "") {
        document.getElementById("productError").textContent = "please choose a product";
        hasError = true;
    }

    if (isNaN(quantity) || quantity < 1 || quantity > 10) {
        document.getElementById("quantityError").textContent = "quantity must be between 1 and 10";
        hasError = true;
    }

    
    if (hasError) {
        return;
    }

    
    let total = prices[product] * quantity;

    if (quantity >= 3) {
        total = total * 0.9;
    }

    
    const productNames = {
        espresso: "Espresso",
        latte: "Latte",
        croissant: "Croissant"
    };

    const orderDiv = document.createElement("div");
    orderDiv.className = "order-card";

    const nameP = document.createElement("p");
    nameP.textContent = "Name: " + name;
    orderDiv.appendChild(nameP);

    const productP = document.createElement("p");
    productP.textContent = "Product: " + productNames[product] + " × " + quantity;
    orderDiv.appendChild(productP);

    const totalP = document.createElement("p");
    totalP.textContent = "Total: " + total.toFixed(1) + " EGP";
    orderDiv.appendChild(totalP);

    if (total > 200) {
        const freeP = document.createElement("p");
        freeP.className = "free-delivery";
        freeP.textContent = "Free delivery";
        orderDiv.appendChild(freeP);
    }

    ordersDiv.appendChild(orderDiv);

    
    form.reset();
});