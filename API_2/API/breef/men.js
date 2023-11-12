function fetchProducts() {
    fetch('http://localhost/API/server/men_or_wemon_products.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({ gender: 'male' }) 
    })
    .then(response => response.json())
    .then(data => {
        const productContainer = document.getElementById('pro-container');

        data.forEach(product => {
            const card = document.createElement('div');
            card.className = 'pro';
            card.innerHTML =`
            <img src="images/${product.image}" alt="">
            <div class="des">
                <span>${product.name}</span>
                <h5>${product.description}</h5>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h4>$${product.price}</h4>
                <button id="cardsBtnJS"><a href="sproduct.html#${product.product_id}">View</a><button>
            </div>`;
            productContainer.appendChild(card);
        });

    })
    .catch(error => console.error('Error fetching data:', error));
}

fetchProducts();