async function loginFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  if (username && password) {
    const response = await fetch('/api/user/login', {
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
      alert('Adventurer your credentials are suspicious. Try again');
    }
  }
}


document.querySelector('#loginForm').addEventListener('submit', loginFormHandler);


document.querySelector('#loginForm').addEventListener('submit', loginFormHandler);


