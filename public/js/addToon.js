async function newFormHandler(event) {
    event.preventDefault();

    const toonName = document.querySelector('input[name="toonName"]').value;
    const race = document.querySelector('input[name="race"]').value;
    const gender = document.querySelector('input[name="gender"]').value;
    const toonClass = document.querySelector('input[name="toonClass"]').value;
    const backstory = document.querySelector('input[name="backstory"]').value;



    const response = await fetch(`/api/toon`, {
        method: 'POST',
        body: JSON.stringify({
            toonName,
            race,
            gender,
            toonClass,
            backstory
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/user');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-toon-form').addEventListener('submit', newFormHandler);