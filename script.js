
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
    const seatPrice = 550; // Assuming the price per seat is 550 BDT
    const totalPrice = seatCount * seatPrice;
    document.querySelector('.total-price').textContent = totalPrice + ' '+ 'BDT ' ;
}

updateTotalPrice();

document.querySelector('.seat-count').addEventListener('DOMSubtreeModified', updateTotalPrice);











