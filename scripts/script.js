const form = document.getElementById('todo-form');
const input = document.querySelector('input[type="text"]');
const ul = document.getElementById('todo-list');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  if (input.value !== '') {
    const li = document.createElement('li');
    const todoText = document.createTextNode(input.value);
    const deleteBtn = document.createElement('button');
    deleteBtn.appendChild(document.createTextNode('Delete'));
    deleteBtn.classList.add('delete-item');
    li.appendChild(todoText);
    li.appendChild(deleteBtn);
    ul.appendChild(li);
    input.value = '';
  }
});

ul.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-item')) {
    event.target.parentElement.remove();
  }
});
