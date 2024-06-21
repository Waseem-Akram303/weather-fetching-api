const weatherForm = document.getElementById("weatherForm");
const weatherInfo = document.getElementById("weatherInfo");

weatherForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const city = document.getElementById("cityInput").value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a1d1a01c2ca6d0d2a3041fb0961aa3a0`
  )
    .then((response) => response.json())
    .then((data) => {
      const temperature = Math.round(data.main.temp - 273.15); // Convert to Celsius
      const description = data.weather[0].description;
      weatherInfo.innerHTML = `<p>Weather in ${city}: ${temperature}°C, ${description}</p>`;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      weatherInfo.innerHTML =
        "<p>Something went wrong. Please try again later.</p>";
    });
});
