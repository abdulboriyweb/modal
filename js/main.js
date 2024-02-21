const openModalBtn = document.getElementById('openModal');
const modal = document.getElementById('myModal');
const closeModalBtn = document.getElementsByClassName('close')[0];

// Open modal
openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Close modal
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when clicking outside the modal
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
