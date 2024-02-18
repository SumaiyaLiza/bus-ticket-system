
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


