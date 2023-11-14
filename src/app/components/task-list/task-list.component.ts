import { Component } from '@angular/core';
import { ITask, Levels } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  // TODO:  Reformular con una lista de tareas

  task1: ITask = {
    title: 'Tarea 1',
    description: 'Description 1',
    completed: false,
    level: Levels.Info,
  };

  task2: ITask = {
    title: 'Tarea 2',
    description: 'Description 2',
    completed: false,
    level: Levels.Urgent,
  };

  constructor() {}

  ngOnInit(): void {}
}
