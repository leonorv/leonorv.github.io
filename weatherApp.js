window.addEventListener('load', ()=> {

    let long;
    let lat;
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=0c1a14c75b4849a4cb18e1ec3bdf0e64`;
            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                const {temp} = data.main;
                //set elements from api
                celsius = temp - 273.17; //K to C formula
                temperatureDegree.textContent = String(celsius.toFixed(2));
                locationTimezone.textContent = data.name;
            })
        });
    }
});