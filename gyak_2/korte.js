let todos = {
  items: [],
  addTodoItem: function(newTodo){
    this.items.push(newTodo);
  },
  removeTodoItem: function(whatToRemoveName){
    this.items = this.items.filter(item => item.name !== whatToRemoveName);
  },
  showMe: function(){
    console.log(this.items);
  },
  reset: function(){
    this.items = [];
  }
};

todos.showMe();
todos.addTodoItem('korte');
todos.addTodoItem(2);
todos.showMe();
todos.removeTodoItem("2");
todos.showMe();
todos.removeTodoItem(2);
todos.showMe();

todos.reset();

todos.addTodoItem({name: 'todo1', estimate: 12});
todos.addTodoItem({name: 'todo2', estimate: 4});
todos.showMe();
// ez nem mukszik, mert nem ugyan arra az objetctre mutat, akkor is ha tartalmilag egyezik
// ha modositjuk, hogy valami azonosito alapja n torol, akkor maris jobb
//todos.removeTodoItem({name: 'todo1', estimate: 12});
todos.removeTodoItem('todo1');
todos.showMe();
