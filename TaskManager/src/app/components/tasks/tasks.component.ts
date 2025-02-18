import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { NgFor } from '@angular/common';
import { TaskItemComponent } from "../task-item/task-item.component";
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  imports: [NgFor, TaskItemComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit{
  tasks: Task[] = [];

  constructor(private taskService: TaskService){}

  ngOnInit(): void {
    this.taskService.getTask().subscribe((tasks) => (this.tasks = tasks))
  }
  deleteTask(task: Task){
    this.taskService.deleteTask(task).subscribe(
      () => (
        this.tasks = this.tasks.filter((t) => t.id !== task.id)
      )
    )
  }

  toggleReminder(task: Task){
    task.reminder = !task.reminder
    this.taskService.updateTaskReminder(task).subscribe();
  }
}
