function validateForm(event) {
    const nameInput = document.querySelector('input[name="name"]');
    const emailInput = document.querySelector('input[name="email"]');
    const passwordInput = document.querySelector('input[name="password"]');

    if (nameInput.value.trim() === '') {
      alert('Please enter your name.');
      nameInput.focus();
      return false;
    }

    if (emailInput.value.trim() === '') {
      alert('Please enter your email address.');
      emailInput.focus();
      return false;
    } else if (!isValidEmail(emailInput.value.trim())) {
      alert('Please enter a valid email address.');
      emailInput.focus();
      return false;
    }

    if (passwordInput.value.trim() === '') {
      alert('Please enter your password.');
      passwordInput.focus();
      return false;
    }

    setTimeout(() => {
      alert('Form submitted successfully!');
      document.querySelector('.pageclip-form').submit();
    }, 1000);

    return false;
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }