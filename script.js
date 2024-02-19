function next() {
                   
  const HomeScreen = document.getElementById('home-screen'); 
  HomeScreen.classList.add('hidden'); 

  const Offer = document.getElementById('seat'); 
  Offer.classList.add('hidden'); 

  const Remove = document.getElementById('remove'); 
  Remove.classList.add('hidden'); 

  const Offers = document.getElementById('offer'); 
  Offers.classList.add('hidden');
  const Last = document.getElementById('last'); 
  Last.classList.add('hidden') ; 

  const Confirm = document.getElementById('confirm'); 
  Confirm.classList.remove('hidden'); 
}

// seat number,available,selected 
const seatButtons = document.querySelectorAll('.seat-btn');
const availableCountElement = document.querySelector('.available-count');
const selectedCountElement = document.querySelector('.selected-count');
const seatCountElement = document.querySelector('.seat-count');

let selectedSeats = 0;
let availableSeats = 40;

for (let i = 0; i < seatButtons.length; i++) {
const btn = seatButtons[i];
btn.addEventListener('click', function onClick() {
  if (!btn.classList.contains('selected') && selectedSeats < 4) {
    btn.classList.add('selected');
    selectedSeats++;
    availableSeats--;
    btn.style.backgroundColor = '#1DD100'; 
    btn.style.color = 'white'; 
  } else if (btn.classList.contains('selected')) {
    btn.classList.remove('selected');
    selectedSeats--;
    availableSeats++;
    btn.style.backgroundColor = ''; 
    btn.style.color = '';
  }
  availableCountElement.textContent = availableSeats + " Available";
  selectedCountElement.textContent = selectedSeats + " Selected";
  seatCountElement.textContent = selectedSeats;
});
}








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
  if (couponInput === 'NEW15') {
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