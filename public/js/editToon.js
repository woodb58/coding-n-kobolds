async function editFormHandler(event) {

    event.preventDefault();

    const toonName = document.querySelector('input[name="toonName"]').value;
    const race = document.querySelector('select[name="race"]').value;
    const gender = document.querySelector('select[name="gender"]').value;
    const toonClass = document.querySelector('select[name="toonClass"]').value;
    const backstory = document.querySelector('textarea[name="backstory"]').value;


    const response = await fetch(`/api/toon`, {
        method: 'PUT',
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
    console.log(response)
    // if (response.ok) {
    //     document.location.replace('/user');
    // } else {
    //     alert(response.statusText);
    // }
}

document.querySelector('.edit-toon-form').addEventListener('submit', editFormHandler);
