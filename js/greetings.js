const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  // 기본동작(페이지 새로고침) 방지
  event.preventDefault();

  // form 숨기기
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);

  // 로컬 스토리지에 username 저장
  localStorage.setItem(USERNAME_KEY, username);

  // 인삿말 보이게 하기
  paintGreetings(username);
}

function paintGreetings(username) {
  // 시간대에 따라 인사말 다르게 지정
  const now = new Date();
  const hours = now.getHours();

  if (hours >= 0 && hours < 6) {
    greeting.innerText = `Good night, ${username} 💕`;
  } else if (hours >= 6 && hours < 12) {
    greeting.innerText = `Good morning, ${username} ☀️`;
  } else if (hours >= 12 && hours < 18) {
    greeting.innerText = `Good afternoon, ${username} ☕️`;
  } else {
    greeting.innerText = `Good evening, ${username} ✨`;
  }

  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (!savedUsername) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  // 엔터나 버튼을 클릭했을 때 submit 이벤트 발생
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
