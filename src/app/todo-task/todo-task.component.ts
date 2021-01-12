import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface Todo {
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleted = new EventEmitter<string>();
  @Output() added = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void { }

  completeTask(event) {
    this.todo.completed = !this.todo.completed;
  }

  deleteTodo() {
    //fire an event to the parent telling it which task was deleted
    this.deleted.emit(this.todo.task);
  }

}
