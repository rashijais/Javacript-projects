const API_KEY = "0955c3662495cd995eacf6bd433a0864";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=";

async function checkWeather(city){
    try {
        const response = await fetch(`${API_URL}${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        console.log(data);

        const cityTemp = document.getElementById("city-temp");
        const cityName = document.getElementById("city-name");
        const humPer = document.getElementById("humidity_percent");
        const windSpeed = document.getElementById("windspeed");
        const weatherImg = document.getElementById("weather-image");

        if (cityName) cityName.textContent = data.name;
        if (cityTemp) cityTemp.textContent = `${Math.round(data.main.temp)}°C`;
        if (humPer) humPer.textContent = `${data.main.humidity}%`;
        if (windSpeed) windSpeed.textContent = `${data.wind.speed} Km/h`;

        // Selecting an image based on the main weather condition
        const weatherCondition = data.weather[0].main.toLowerCase();
        if (weatherCondition.includes("rain")) {
            weatherImg.src = "images/rainy.png";
        } else if (weatherCondition.includes("clear")) {
            weatherImg.src = "images/sunny.png"; 
        } else {
            weatherImg.src = "images/cloudy.png"; 
        }

    } catch (error) {
        console.error('Failed to fetch weather data:', error);
    }
}

const btn = document.getElementById("search-btn");
const city = document.getElementById("search");
btn.addEventListener("click",()=>{
    checkWeather(city.value);
});
