import { Component, Input, OnInit } from '@angular/core';
import { ITask } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() task: ITask | undefined;

  constructor() {}

  ngOnInit(): void {}

  deleteTask() {
    console.log('Eliminar Tarea', this.task?.title);
  }
}
