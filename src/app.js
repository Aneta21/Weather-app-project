function showTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let cityName = document.querySelector("#city");
  cityName.innerHTML = response.data.name;
  let description = document.querySelector("#description");
  description.innerHTML = response.data.weather[0].description;
  let feelsLike = document.querySelector("#feels_like");
  feelsLike.innerHTML = Math.round(response.data.main.feels_like);
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = response.data.main.humidity;
  let windSpeedElement = document.querySelector("#wind");
  windSpeedElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "065d55f0dc357d457b78c1ad371a7843";
let units = "metric";
let city = "New York";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
console.log(apiUrl);
axios.get(apiUrl).then(showTemperature);
