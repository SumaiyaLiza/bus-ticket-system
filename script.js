
// If i double click it will be white otherwise it will stay green by one click 
const btns = document.querySelectorAll('.a');

for (let i = 0; i < btns.length; i++) {
  let clicked = false;
  const btn = btns[i];
  btn.addEventListener('click', function onClick() {
    clicked = !clicked;
    if (clicked) {
      btn.style.backgroundColor = '#1DD100';
      btn.style.color = 'white';
    } else {
      btn.style.backgroundColor = '';
      btn.style.color = '';
    }
  });
} 


// seat number,available,selected 
const seatButtons = document.querySelectorAll('.seat-btn');
const availableCountElement = document.querySelector('.available-count');
const selectedCountElement = document.querySelector('.selected-count');
const seatCountElement = document.querySelector('.seat-count');

let selectedSeats = 0;
let availableSeats = 40; 

seatButtons.forEach(btn => {
  btn.addEventListener('click', function onClick() {
    if (!btn.classList.contains('selected')) {
      btn.classList.add('selected');
      selectedSeats++;
      availableSeats--;
    } else {
      btn.classList.remove('selected');
      selectedSeats--;
      availableSeats++;
    }
    availableCountElement.textContent = availableSeats + " Available";
    selectedCountElement.textContent = selectedSeats + " Selected";
    seatCountElement.textContent = selectedSeats;
  });
});


// sum of ticket price 

function updateTotalPrice() {
    const seatCount = parseInt(document.querySelector('.seat-count').textContent);
    const seatPrice = 550; // 
    const totalPrice = seatCount * seatPrice;
    document.querySelector('.total-price').textContent = totalPrice + ' BDT'; // Removed extra space
    return totalPrice; 
}

updateTotalPrice();

document.querySelector('.seat-count').addEventListener('DOMSubtreeModified', updateTotalPrice);

document.getElementById('applyCouponBtn').addEventListener('click', function() {
    const couponInput = document.getElementById('couponInput').value.trim(); 
    let grandTotal = updateTotalPrice(); 
    let errorMessage = ''; 

    // Applying coupon logic
    if (couponInput === 'New15') {
        grandTotal *= 0.85; 
    } else if (couponInput === 'Couple 20') {
        grandTotal *= 0.80; 
    } else {
        errorMessage = 'Invalid coupon code'; 
    }

    const grandTotalLabel = document.getElementById('grandTotalLabel');
    const grandTotalValue = document.getElementById('grandTotalValue');
    if (errorMessage === '') {
        grandTotalValue.textContent =grandTotal.toFixed(2) + 'BDT ';
        grandTotalLabel.classList.remove('hidden');
        grandTotalValue.classList.remove('hidden');
    } else {
        grandTotalLabel.classList.add('hidden');
        grandTotalValue.classList.add('hidden');
        alert(errorMessage); 
    }
});

// Function to add a class
function addClass(element, className) {
    element.classList.add(className);
}

// Function to remove a class
function removeClass(element, className) {
    element.classList.remove(className);
}

document.getElementById('nextBtn').addEventListener('click', function() {
    // Get form inputs
    const passengerName = document.getElementById('passengerName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;

    // Check if form inputs are valid (you can add validation logic here if needed)

    // Show confirmation message
    const confirmElement = document.getElementById('confirm');
    removeClass(confirmElement, 'hidden');
});

// If "Continue" button inside the confirmation message is clicked, hide the confirmation message
document.getElementById('confirm').addEventListener('click', function(event) {
    if (event.target.classList.contains('btn')) {
        const confirmElement = document.getElementById('confirm');
        addClass(confirmElement, 'hidden');
    }
});

