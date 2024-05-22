const apiURL = "https://open-meteo.com/v1/forecast?";
const latitude = 37.6819;
const longitude = -121.768;
const temperature = "temperature_2m";
const precipitation = "precipitation,rain,showers,snowfall";
const temperatureUnit = "fahrenheit";
const windSpeed = "ms";
const timezone = "America%2FLos_Angeles";
const forecastDays = "1";
const forecastForm = document.querySelector(".forecastForm");
const locationInput = document.querySelector(".locationInput");
const card = document.querySelector(".card");

forecastForm.addEventListener("submit", async event => {
    event.preventDefault();

    const location = locationInput.value;

    if(location){
        try{
            const forecastData = await getForecastData(location);
            showForecastData(forecastData);

        }
        catch(error){
            console.error(error);
            showError(error);
        }

    }
    else{
        showError("Please, enter your location");
    }

});

async function getForecastData(location){

    const url = `${apiURL}latitude=${latitude}&longitude=${longitude}&current=${temperature}&hourly=${temperature}&temperature_unit=${temperatureUnit}&wind_speed_unit=${windSpeed}&timezone=${timezone}&forecast_days=${forecastDays}`;

    const res = await fetch(url);

    console.log(res);

    if (!res.ok) {
        throw new Error("That is not possible to get data")
    }

    return await response.json();
}

function showForecastData(data){

    console.log(data);

    



}

function getForecastPicture(forecastIndex){

}

function showError(errorMessage){

    const error = document.createElement("p");
    error.textContext = errorMessage;
    error.classList.add("errorInfo");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(error);
}

fetch(`${apiURL}latitude=${latitude}&longitude=${longitude}&current=${temperature}&hourly=${temperature}&temperature_unit=${temperatureUnit}&wind_speed_unit=${windSpeed}&timezone=${timezone}&forecast_days=${forecastDays}`, {
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
        response.json();
    })
    .then(data => {
        data.forEach(temp => {
            const innerText = `<li>${temp.name}</li>`;

            document.querySelector('ul').insertAdjacentHTML('beforeend', innerText)
        });
    })
    .catch(error => console.log('error'))
);