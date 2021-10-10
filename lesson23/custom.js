const SELECTOR = Object.freeze ({
   LIST: '.todo-list',
   INPUT: '.username-input',
   SEND_BTN: '.button-send',
   TODO_ITEM: '.todo-item',
   TODO_ITEM_TEMPLATE: '#newTaskTemplate',
});
const CLASS = Object.freeze ({
   REMOVE_BTN: 'remove-button',
   DONE_BTN: 'done-button',
   DONE: 'done',
})

const list = document.querySelector(SELECTOR.LIST);
const input = document.querySelector(SELECTOR.INPUT);
const button = document.querySelector(SELECTOR.SEND_BTN);
const todoHTML = document.querySelector(SELECTOR.TODO_ITEM_TEMPLATE).innerHTML;

button.addEventListener('click', onAddTodoButtonClick);
list.addEventListener('click', onTodoListClick);

function init() {
   TodoAPI.getList()
   .then((todoList) => addTodoList(todoList))
   .catch((error) => alert(error.message))
}

init();

function onAddTodoButtonClick() {
   if (!isValid(input.value)) {
      alert('The field must not be empty');
      return;
   }

   addTodo(input.value)
   clear();
}

function onTodoListClick(e) {
   const todoEl = getTodoElement(e.target);
   const classList = e.target.classList;

   if (e.target.classList.contains(CLASS.REMOVE_BTN)) {
      removeTodo(todoEl).then(() => {
         TodoAPI.getList()
         .then((todoList) => addTodoList(todoList))
         .catch((error) => alert(error.message));
      })
      return;
   }
   if (classList.contains(CLASS.DONE_BTN)) {
      return toggleDone(todoEl);
   }
}

function getTodoElement(target) {
   return target.closest(SELECTOR.TODO_ITEM);
}

function isValid(message) {
   return message !== '';
}

function addTodoList(todoList) {
   const html = todoList.map(todo => getTodoHTML(todo)).join('');

   list.innerHTML = html;
}

function getTodoHTML(todo) {
   return todoHTML
   .replace('{{message}}', todo.title)
   .replace('{{todoId}}', todo.id);
}

function addTodo(message) {
   list.insertAdjacentHTML('beforeend', todoHTML.replace('{{message}}', message));
}

function removeTodo(el) {
   return TodoAPI.delete(+el.dataset.id);
}

function toggleDone(el) {
   el.classList.toggle(CLASS.DONE);
}

function clear() {
   input.value = '';
}