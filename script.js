function showMessage() {
  const message = document.getElementById('message');
  const images = document.getElementById('imageContainer');

  const isVisible = window.getComputedStyle(message).display === 'block';

  if (isVisible) {
    message.style.display = 'none';
    images.style.display = 'none';
  } else {
    message.style.display = 'block';
    images.style.display = 'flex';
  }
}