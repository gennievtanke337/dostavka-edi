
let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    cartCount.textContent = cart.length;
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price} грн`;
        cartItems.appendChild(li);
    });
    cartTotal.textContent = total;
}

function checkout() {
    alert(`Дякуємо за замовлення! Загальна сума: ${total} грн`);
    cart = [];
    total = 0;
    updateCart();
    closeModal();
}


const modal = document.getElementById('cart-modal');
const cartLink = document.getElementById('cart-link');
const closeBtn = document.querySelector('.close');

cartLink.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

function closeModal() {
    modal.style.display = 'none';
}

function clearCart() {
    cart = [];
    total = 0; 
    updateCart(); 
    alert('Кошик очищено!'); 
}
