
// hide and go to the seat page 

function Button() {
    const Button = document.getElementById('home-screen');
    Button.classList.add('hidden');

    const Seat = document.getElementById('seat');
    Seat.classList.remove('hidden');
}

//  if clicked that will be green otherwise white and two click is white and one click is green 

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








