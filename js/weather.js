// TODO: API Key 관리 방법 고민해보기
const API_KEY = "";
const UNKNOWN_LOCATION_ICON_URL = "/img/unknown-location.png";

async function onGeoOk(position) {
  const lat = position.coords.latitude; // 위도
  const lon = position.coords.longitude; // 경도

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  const icon = document.querySelector("#weather img");
  const description = document.querySelector("#weather span");

  if (response.ok) {
    icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    description.innerHTML = `${data.main.temp} ℃&nbsp;&nbsp;&nbsp;&nbsp;${data.name}`;
  } else {
    icon.src = UNKNOWN_LOCATION_ICON_URL;
    description.innerText = "Please tell me where you are!";
  }
}

function onGeoError() {
  const icon = document.querySelector("#weather img");
  const description = document.querySelector("#weather span");

  icon.src = UNKNOWN_LOCATION_ICON_URL;
  description.innerText = "Please tell me where you are!";
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
