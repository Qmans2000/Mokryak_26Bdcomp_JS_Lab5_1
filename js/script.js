
const plusButtons = document.querySelectorAll('.quantity button:nth-child(3)');
const minusButtons = document.querySelectorAll('.quantity button:nth-child(1)');
const quantityInputs = document.querySelectorAll('.quantity input[type="number"]');
const prices = document.querySelectorAll('.cart-item span'); 

plusButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (parseInt(quantityInputs[index].value) < 9){
        quantityInputs[index].value = parseInt(quantityInputs[index].value) + 1;
        updateTotals();
        } 
    });
});

minusButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (parseInt(quantityInputs[index].value) > 1) {
            quantityInputs[index].value = parseInt(quantityInputs[index].value) - 1;
            updateTotals(); 
        }
        else{
            const item = button.parentElement.parentElement;
        item.remove(); 
        updateTotals(); 
        }
    });
});

function updateTotals() {
    const cartItems = document.querySelectorAll('.cart-item');
    let subtotal = 0;

    cartItems.forEach(item => {
        const price = parseFloat(item.querySelector('span').textContent.slice(1));
        const quantity = parseInt(item.querySelector('input[type="number"]').value);
        subtotal += price * quantity;
    });

    const shippingCost = 20;
    const total = subtotal + shippingCost;

    document.querySelector('.total span:nth-child(2)').textContent = `$${subtotal.toFixed(2)}`;
    document.querySelector('.tat span:nth-child(2)').textContent = `$${total.toFixed(2)}`;
}

updateTotals();

const deleteButtons = document.querySelectorAll('.cart-item .delete-button');

deleteButtons.forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        item.remove(); 
        updateTotals(); 
    });
});


