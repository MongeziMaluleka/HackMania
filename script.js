const hubItems = document.querySelectorAll('.hub-item');
const buttons = document.querySelectorAll('.btn');
const modal = document.getElementById('bookingModal');
const closeBtn = document.getElementsByClassName('close')[0];
const bookingForm = document.getElementById('bookingForm');
let selectedHub = '';

hubItems.forEach(item => {
  item.addEventListener('click', () => {
    hubItems.forEach(hub => hub.classList.remove('selected'));
    item.classList.add('selected');
    selectedHub = item.dataset.hub;
    buttons.forEach(button => button.classList.remove('disabled'));
  });
});

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (!selectedHub) {
      alert('Please select a hub first.');
      return;
    }
    modal.style.display = "block";
  });
});

closeBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

bookingForm.onsubmit = function(e) {
  e.preventDefault();
  alert(`Thank you for booking with ${selectedHub.replace('-', ' ')}! We'll contact you shortly to confirm your appointment.`);
  modal.style.display = "none";
  bookingForm.reset();
}
// Contact Form Handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = {
      name: document.getElementById('contactName').value,
      email: document.getElementById('contactEmail').value,
      subject: document.getElementById('contactSubject').value,
      message: document.getElementById('contactMessage').value
    };
    
    // Here you would typically send the data to a server
    // For now, we'll just show an alert
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
  });