
function Button() {
    const Button = document.getElementById('home-screen');
    Button.classList.add('hidden');

    const Seat = document.getElementById('seat');
    Seat.classList.remove('hidden');
}


const btns = document.querySelectorAll('.a');

btns.forEach(btn => {
  btn.addEventListener('click', function onClick() {
    btn.style.backgroundColor = '#1DD100';
    btn.style.color = 'white';
  });
});



const seatButtons = document.querySelectorAll('.seat-btn');

seatButtons.forEach(btn => {
  btn.addEventListener('click', function onClick() {
    // Update Seat count
    const seatCountElement = document.querySelector('.seat-count');
    seatCountElement.textContent = parseInt(seatCountElement.textContent) + 1;
  });
});

