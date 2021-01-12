import { Component, OnInit } from '@angular/core';

interface Todo {
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  public todos: Todo[];
  task: string = "";
  filter: string = "";

  constructor() {
    this.todos = [
      { task: 'Vaccum', completed: false },
      { task: 'Dust', completed: false },
      { task: 'Run dishwasher', completed: true },
      { task: 'Do laundry', completed: true },
      { task: 'Relax', completed: false },
      { task: 'Walk the dog', completed: false },
    ];
  }

  addTask() {
    const task = this.task;
    this.todos.push({task, completed: false});
  }

  removeTask(event) {
    const id = event
    const deleteIndex = this.todos.findIndex(function(todo) {
      return todo.task === id;
    });
    this.todos.splice(deleteIndex, 1);
  }

  getFilterResults() {
    if (this.filter) {
      return this.todos.filter((todo) => {
        return todo.task.toLowerCase().includes(this.filter.toLowerCase());
      }); 
    } else {
        return this.todos;
    }    
  }

  ngOnInit() {} 

}
