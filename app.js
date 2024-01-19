const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("#login-form input");
const loginButton = loginForm.querySelector("#login-form button");
const link = document.querySelector("a");

function onLoginSubmit(event) {
  event.preventDefault();
}

function handleLinkClick(event) {
  event.preventDefault();
}
// 엔터나 버튼을 클릭했을 때 submit 이벤트 발생
loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
