const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
let toDos = [];

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

function saveToDos(toDos) {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function handleToDoSubmit(event) {
  // 브라우저 기본동작(페이지 새로고침) 방지
  event.preventDefault();

  // 입력값 가져와서 로컬 스토리지에 저장
  const newToDo = toDoInput.value;
  toDos.push(newToDo);
  saveToDos(toDos);

  // 리스트에 추가하기
  paintToDo(newToDo);

  // input 비우기
  toDoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// 로컬 스토리지에 저장된 리스트 조회
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  // 저장되어 있던 리스트로 복원
  toDos = parsedToDos;
  parsedToDos.forEach((toDo) => paintToDo(toDo));
}
