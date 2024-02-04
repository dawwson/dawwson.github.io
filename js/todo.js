const toDoForm = document.querySelector("#todo-wrapper form");
const toDoInput = document.querySelector("#todo-wrapper form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function handleToDoSubmit(event) {
  // 브라우저 기본동작(페이지 새로고침) 방지
  event.preventDefault();

  // 입력값 가져와서 로컬 스토리지에 저장
  const newToDo = {
    id: Date.now(),
    content: toDoInput.value,
  };
  toDos.push(newToDo);
  saveToDos(toDos);

  // 리스트에 추가하기
  paintToDo(newToDo);

  // input 비우기
  toDoInput.value = "";
}

function saveToDos(toDos) {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(toDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  span.innerText = toDo.content;
  button.innerText = "❌";
  button.addEventListener("click", handleDeleteClick);

  li.id = String(toDo.id);
  li.appendChild(span);
  li.appendChild(button);

  toDoList.appendChild(li);
}

function handleDeleteClick(event) {
  // 버튼의 부모 요소인 li 조회
  const li = event.target.parentElement;

  // li를 화면에서 삭제
  li.remove();

  // 삭제할 투두를 제외하고 리스트 업데이트
  toDos = toDos.filter((toDo) => toDo.id !== Number(li.id));

  // 로컬 스토리지 업데이트
  saveToDos(toDos);
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
