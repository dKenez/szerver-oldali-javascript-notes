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
  },
  calcAllEstimate: function(){
    let sum = 0;

    for(let i = 0; i < this.items.length; i++){
      sum += this.items[i].estimate;
    }

    sum = 0;
    this.items.forEach(item => sum += item.estimate);

    return sum;
  }
};

todos.addTodoItem({name: 'todo1', estimate: 12});
todos.addTodoItem({name: 'todo2', estimate: 4});
todos.addTodoItem({name: 'todo3', estimate: 6});
todos.addTodoItem({name: 'todo4', estimate: 1});
todos.showMe();
console.log(todos.calcAllEstimate());
