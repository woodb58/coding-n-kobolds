async function deleteFormHandler(event) {

    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/toon/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/user');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.delete-toon-btn').addEventListener('click', deleteFormHandler);