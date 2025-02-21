import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TasksComponent } from './components/tasks/tasks.component';
import {HttpClientModule, HttpHeaders } from '@angular/common/http';
import {FormsModule} from '@angular/forms'


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, TasksComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}