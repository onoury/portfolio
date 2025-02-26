const form = document.getElementById('contact-form');
  const spinner = document.getElementById('spinner');
  const successCheckmark = document.getElementById('success-checkmark');

  form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Stop the default form submission (redirect)

    // Show the spinner, hide the checkmark
    spinner.style.display = 'inline-block';
    successCheckmark.style.display = 'none';

    // Gather form data
    const formData = new FormData(form);

    try {
      // Send form data to Formspree
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json' // tells Formspree to return JSON
        }
      });

      if (response.ok) {
        // Hide the spinner
        spinner.style.display = 'none';
        // Show the checkmark
        successCheckmark.style.display = 'inline';
        // Clear the form
        form.reset();
      } else {
        // Hide the spinner
        spinner.style.display = 'none';
        console.error('Form submission error:', response.statusText);
        alert('Oops! Something went wrong. Please try again.');
      }
    } catch (error) {
      spinner.style.display = 'none';
      console.error('Fetch error:', error);
      alert('Oops! Something went wrong. Please try again.');
    }
  });