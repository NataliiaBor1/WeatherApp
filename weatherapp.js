const apiURL = "https://open-meteo.com/v1/forecast?";
const latitude = 37.6819;
const longitude = -121.768;
const temperature = "temperature_2m";
const precipitation = "precipitation,rain,showers,snowfall";

fetch(`${apiURL}latitude=${latitude}&longitude=${longitude}&hourly=${temperature}`, {
    method: 'GET',
    headers: {
        'Content-Type': application/json
    }
} 
    .then(response => {
        if (response.ok) {
            console.log('Here is your forecast for the week')
            console.log(response)
        } else {
            console.log('Something went wrong... Try again')
        }
        response.json()
    })
    .then(data => {
        data.forEach(temp => {
            const innerText = `<li>${temp.name}</li>`;

            document.querySelector('ul').insertAdjacentHTML('beforeend', innerText)
        });
    })
    .catch(error => console.log('error'))
);