// // function formatDate(date) {
// //   let hours = date.getHours();
// //   if (hours < 10) {
// //     let hours = `0${hours}`;
// //   }
// //   let minutes = date.getMinutes();

// //   // if (minutes < 10) {
// //   //   let minutes = `0${minutes}`;
// //   // }

// //   let dayNumber = date.getDay();
// //   let days = [
// //     "Sunday",
// //     "Monday",
// //     "Tuesday",
// //     "Wednesday",
// //     "Thursday",
// //     "Friday",
// //     "Saturday",
// //   ];
// //   let monthNumber = date.getMonth();
// //   let months = [
// //     "January",
// //     "February",
// //     "March",
// //     "April",
// //     "May",
// //     "June",
// //     "July",
// //     "August",
// //     "September",
// //     "October",
// //     "November",
// //     "December",
// //   ];

// //   return `${months[monthNumber]}, ${days[dayNumber]} ${hours}:${minutes}`;
// // }

// // function search(event) {
// //   event.preventDefault();

// //   let cityElement = document.querySelector("#city");
// //   let cityInput = document.querySelector("#exampleFormControlInput1");
// //   cityElement.innerHTML = cityInput.value;
// // }

// // function converToFarenheit(event) {
// //   event.preventDefault;
// //   let temeratureElement = document.querySelector("#temperature");
// //   let temperature = temeratureElement.innerHTML;
// //   temperature = Number(temperature);
// //   temeratureElement.innerHTML = Math.round((temperature * 9) / 5 + 32);
// // }

// // let dateElement = document.querySelector("#date");
// // let currentTime = new Date();

// // dateElement.innerHTML = formatDate(currentTime);
// // //--------------------------------------------------------

// // let searchForm = document.querySelector("#searchForm");
// // searchForm.addEventListener("submit", search);
// // //---------------

// // let farenheit = document.querySelector("#f");
// // let celesius = document.querySelector("#c");
// // farenheit = farenheit.addEventListener("ckick", converToFarenheit);
// // ----------------------------------------------------------------------------------------
// function formatDate(date) {
//   let hours = date.getHours();
//   if (hours < 10) {
//     hours = `0${hours}`;
//   }
//   let minutes = date.getMinutes();
//   if (minutes < 10) {
//     minutes = `0${minutes}`;
//   }

//   let dayIndex = date.getDay();
//   let days = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];
//   let day = days[dayIndex];

//   return `${day} ${hours}:${minutes}`;
// }

// function search(event) {
//   event.preventDefault();
//   let cityElement = document.querySelector("#city");
//   let cityInput = document.querySelector("#exampleFormControlInput1");
//   cityElement.innerHTML = cityInput.value;
// }

// function convertToFahrenheit(event) {
//   event.preventDefault();
//   let temperatureElement = document.querySelector("#temperature");
//   temperatureElement.innerHTML = 66;
// }

// function convertToCelsius(event) {
//   event.preventDefault();
//   let temperatureElement = document.querySelector("#temperature");
//   temperatureElement.innerHTML = 19;
// }

// // Feature #1
// let dateElement = document.querySelector("#date");
// let currentTime = new Date();
// dateElement.innerHTML = formatDate(currentTime);

// // Feature #2
// let searchForm = document.querySelector("#search-form");
// searchForm.addEventListener("submit", search);

// // Bonus Feature
// let fahrenheitLink = document.querySelector("#fahrenheit-link");
// fahrenheitLink.addEventListener("click", convertToFahrenheit);

// let celsiusLink = document.querySelector("#celsius-link");
// celsiusLink.addEventListener("click", convertToCelsius);
function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}

function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function searchCity(city) {
  let apiKey = "2ff29bed3181c3526c35cc5408037f85";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "2ff29bed3181c3526c35cc5408037f85";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 66;
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 19;
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("New York");
