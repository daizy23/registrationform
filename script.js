const form = document.getElementById('registrationForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = form.elements['name'].value;
  const email = form.elements['email'].value;
  const username = form.elements['username'].value;
  const password = form.elements['password'].value;

  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address');
    return;
  }

  if (password.length < 8) {
    alert('Password should be at least 8 characters long');
    return;
  }

 
  alert('Registration Successful!');
  form.reset(); 
});

