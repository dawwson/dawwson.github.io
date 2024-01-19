const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  // 기본동작(페이지 새로고침) 방지
  event.preventDefault();

  // form 숨기기
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);

  // 인삿말 보이게 하기
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// 엔터나 버튼을 클릭했을 때 submit 이벤트 발생
loginForm.addEventListener("submit", onLoginSubmit);
