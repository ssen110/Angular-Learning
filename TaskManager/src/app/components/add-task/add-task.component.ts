import { Component, OnInit, Output, EventEmitter, importProvidersFrom } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Task } from '../../Task';
import { UiService } from '../../services/ui.service';

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
  showAddTask?: boolean;
  subcription?: Subscription;

  constructor(private uiService: UiService) {
    this.subcription = this.uiService.onToggle().subscribe(
      (value) => (this.showAddTask = value)
    )    
  }

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
