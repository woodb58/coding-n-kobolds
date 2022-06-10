const User = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch('/api/user', {
    method: 'PUT',
    body: JSON.stringify({
      user: id
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }