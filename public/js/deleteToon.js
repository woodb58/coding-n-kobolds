async function deleteFormHandler(event) {

    event.preventDefault();

    const response = await fetch(`/api/toon/${event.target.dataset.id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/user');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.delete-toon-btn').addEventListener('click', deleteFormHandler);