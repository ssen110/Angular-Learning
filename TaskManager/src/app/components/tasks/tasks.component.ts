import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TASKS } from '../../mock-task';
import { NgFor } from '@angular/common'; // Import NgFor

@Component({
  selector: 'app-tasks',
  imports: [NgFor],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit{
  tasks: Task[] = TASKS;

  constructor(){}
  ngOnInit(): void {
    
  }
}
