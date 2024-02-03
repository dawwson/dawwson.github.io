// TODO: API Key 관리 방법 고민해보기
const API_KEY = "";
const UNKNOWN_LOCATION_ICON_URL = "/img/unknown-location.png";

async function onGeoOk(position) {
  const lat = position.coords.latitude; // 위도
  const lon = position.coords.longitude; // 경도

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  const weatherIcon = document.querySelector("#weather img");
  const [temperature, city] = document.querySelectorAll("#weather span");

  if (response.ok) {
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    temperature.innerText = `${data.main.temp} ℃`;
    city.innerText = data.name;
  } else {
    weatherIcon.src = UNKNOWN_LOCATION_ICON_URL;
    temperature.classList.add(HIDDEN_CLASSNAME);
    city.classList.add(HIDDEN_CLASSNAME);
  }
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
