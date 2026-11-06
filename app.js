document.addEventListener('DOMContentLoaded', () => {
    
    //  Select key elements from the DOM
    const buyButtons = document.querySelectorAll('.button-buy');
    const cartCountElement = document.getElementById('cart-count');
    const toastContainer = document.getElementById('toast-container');
    
    // Variable to keep track of the number of items in the cart
    let cartCount = 0;

    // Assign an event to each "Add to cart" button
    buyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Increment the counter
            cartCount++;
            cartCountElement.textContent = `(${cartCount})`;

            // Get the product name from the card 
            const card = e.target.closest('.product-card');
            const productName = card.querySelector('h3').textContent;

            // Show the floating notification
            showToast(`¡${productName} agregado al carrito!`);
        });
    });

    // Function to create and show a toast notification
    function showToast(message) {
        // CREATE a new div for the toast notification
        const toast = document.createElement('div');
        toast.classList.add('toast');
        toast.textContent = message;

        // Insert the toast into the container
        toastContainer.appendChild(toast);

        // Delete the toast after 3 seconds
        setTimeout(() => {
            toast.remove();
        }, 3000);
    }
});