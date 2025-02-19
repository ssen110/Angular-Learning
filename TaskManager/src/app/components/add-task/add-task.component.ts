import { Component, OnInit, Output, EventEmitter, importProvidersFrom } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent{
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter()
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  onSubmit() {
    if(!this.text){
      alert('Please add a Task')
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }
    this.onAddTask.emit(newTask)
  }
}
