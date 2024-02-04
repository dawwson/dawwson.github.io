const toggleButton = document.querySelector("#todo-toggle-button");
const todoWrapper = document.querySelector("#todo-wrapper");
const toDoForm = document.querySelector("#todo-wrapper form");
const toDoInput = document.querySelector("#todo-wrapper form input");
const toDoList = document.querySelector("#todo-wrapper ul");

const TODOS_KEY = "todos";
let toDos = [];
let isListOpen = false;

function handleClickToggleButton() {
  if (isListOpen) {
    // 열려있는 상태이면 리스트를 닫는다.
    todoWrapper.classList.add(HIDDEN_CLASSNAME);
    toggleButton.innerHTML = "Todo List&nbsp;&nbsp;🔽";
    isListOpen = false;
  } else {
    // 닫혀있는 상태이면 리스트를 연다.
    todoWrapper.classList.remove(HIDDEN_CLASSNAME);
    toggleButton.innerHTML = "Todo List&nbsp;&nbsp;🔼";
    isListOpen = true;
  }
}

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

  // 스크롤 맨 밑으로 내리기
  todoWrapper.scrollTop = todoWrapper.scrollHeight;
}

function saveToDos(toDos) {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(toDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteButton = document.createElement("button");
  const completeButton = document.createElement("button");

  span.innerText = toDo.content;
  completeButton.innerText = "✅";
  completeButton.addEventListener("click", handleClickComplete);
  deleteButton.innerText = "❌";
  deleteButton.addEventListener("click", handleDeleteClick);

  li.id = String(toDo.id);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);
  li.appendChild(span);

  toDoList.appendChild(li);
}

function handleClickComplete(event) {
  // 버튼의 부모 요소인 li 조회
  const li = event.target.parentElement;
  const span = li.lastChild;

  // if (span.classList.)
  span.classList.toggle("strike-through");
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

toggleButton.addEventListener("click", handleClickToggleButton);
toDoForm.addEventListener("submit", handleToDoSubmit);

// 로컬 스토리지에 저장된 리스트 조회
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  // 저장되어 있던 리스트로 복원
  toDos = parsedToDos;
  parsedToDos.forEach((toDo) => paintToDo(toDo));
}
