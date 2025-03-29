
document.addEventListener('DOMContentLoaded', function() {
  const newsletterForm = document.getElementById('newsletter-form');
  const emailInput = document.getElementById('newsletter-email');
  
  newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = emailInput.value;
    
    if (email) {
      // Show toast notification
      window.cart.showToast("You're on the list! Get ready for skin-loving, space-inspired goodness!");
      
      // Clear the form
      emailInput.value = '';
    }
  });
});
