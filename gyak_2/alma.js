let a = 'asd';

let todo = []

function addTodoItem(newTodo){
  todo.push(newTodo);
}

function removeTodoItem(whatToRemove){
  todo = todo.filter(item=>item !== whatToRemove);
}

console.log(todo);
addTodoItem('alma');
addTodoItem(2);
console.log(todo);
removeTodoItem('2');
console.log(todo);
removeTodoItem(2);
console.log(todo);
