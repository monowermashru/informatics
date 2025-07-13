// File: welcome.js

window.onload = function () {
  const banner = document.createElement('div');
  banner.textContent = "Welcome to Mashru's Travel Journal!";
  banner.style.position = 'fixed';
  banner.style.top = '0';
  banner.style.left = '0';
  banner.style.width = '100%';
  banner.style.backgroundColor = '#0e7490';
  banner.style.color = '#ecfeff';
  banner.style.textAlign = 'center';
  banner.style.padding = '1em';
  banner.style.zIndex = '9999';
  banner.style.fontSize = '1.1em';
  banner.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.2)';

  document.body.appendChild(banner);

  // Remove after 4 seconds
  setTimeout(() => {
    banner.remove();
  }, 4000);
};
