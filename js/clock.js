const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
// 웹 사이트를 열자마자 시간이 보이도록 하기 위해 호출
getClock();
// 1초마다 시간 바뀌도록 인터벌 설정
setInterval(getClock, 1000);
