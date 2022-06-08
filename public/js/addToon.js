async function newFormHandler(event) {
    event.preventDefault();



    const toonName = document.querySelector('input[name="toonName"]').value;
    const race = document.querySelector('select[name="race"]').option.value;
    const gender = document.querySelector('select[name="gender"]').option.value;
    const toonClass = document.querySelector('select[name="toonClass"]').option.value;
    const backstory = document.querySelector('textarea[name="backstory"]').innerHTML;

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
        console.log("============================================================================" + toonName);
        console.log(race);
        console.log(gender);
        console.log(toonClass);
        console.log(backstory);
        document.location.replace('/user');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-toon-form').addEventListener('submit', newFormHandler);