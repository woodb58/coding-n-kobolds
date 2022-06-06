async function loginFormHandler(event) {
  event.preventDefault();

  const password = document.querySelector('#password-login').value.trim();

  if (password) {
    const response = await fetch('/api/homepage', {
      method: 'post',
      body: JSON.stringify({
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/user');
    } else {
      alert(response.statusText);
    }
  }
}

async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && password) {
    const response = await fetch('/api/signup', {
      method: 'post',
      body: JSON.stringify({
        username,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/user');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('#loginForm').addEventListener('submit', loginFormHandler);

document.querySelector('#signupForm').addEventListener('submit', signupFormHandler);
