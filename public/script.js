const form = document.getElementById("form");
form.addEventListener("submit",(event) => {

  event.preventDefault(); 

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const data = {
    username: username,
    password: password
  };

  fetch('/add-user', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) {
      window.location.href = '/welcome.html'; // Redirect to the welcome page on success
    } else {
      alert('Invalid username or password'); // Display an error message on failure
    }
  })
  .catch(error => {
    console.error('Login failed:', error);
    alert('Login failed. Please try again later.');
  });
}
);

