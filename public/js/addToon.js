async function newFormHandler(event) {
    event.preventDefault();



    const toonName = document.querySelector('input[name="toonName"]').value;
    const race = document.querySelector('select[name="race"]').value;
    const gender = document.querySelector('select[name="gender"]').value;
    const toonClass = document.querySelector('select[name="toonClass"]').value;
    const backstoryValue = document.querySelector('textarea[name="backstory"]');
    const backstory = backstoryValue.value;

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