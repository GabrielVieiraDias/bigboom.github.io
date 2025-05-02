document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.cta-button').addEventListener('click', function() {
    fbq('track', 'Lead');
  });
});
