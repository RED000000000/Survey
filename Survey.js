document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('surveyForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const responses = {};

    for (const [key, value] of formData.entries()) {
      responses[key] = value;
    }

    // Save responses to local storage
    localStorage.setItem('surveyResponses', JSON.stringify(responses));
    console.log('Survey responses saved to local storage:', responses);

    form.reset();
  });
});