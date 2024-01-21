const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

function handleToDoSubmit(event) {
  // 브라우저 기본동작(페이지 새로고침) 방지
  event.preventDefault();

  // 입력값 가져와서 리스트에 추가
  const newToDo = toDoInput.value;
  paintToDo(newToDo);

  // input 비우기
  toDoInput.value = "";
}

function handleDeleteToDo(event) {
  // 버튼의 부모 요소인 li를 삭제
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(toDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  span.innerText = toDo;
  button.innerText = "❌";
  button.addEventListener("click", handleDeleteToDo);

  li.appendChild(span);
  li.appendChild(button);

  toDoList.appendChild(li);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
