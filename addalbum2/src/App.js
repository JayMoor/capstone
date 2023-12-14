// Set the alt attribute of the image
const addAlbumPage = document.querySelector('img');
albumArtImg.alt = 'Album Art';

// Add event listener for the form submission
const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission for demonstration purposes
  alert('Form submitted!');
});

// Add event listeners for the CANCEL and ADD buttons
const cancelButton = document.querySelector('button[type="button"]:first-of-type');
const addButton = document.querySelector('button[type="button"]:last-of-type');

cancelButton.addEventListener('click', function () {
  alert('CANCEL button clicked!');
});

addButton.addEventListener('click', function () {