import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { NgStyle } from '@angular/common'; 

@Component({
  selector: 'app-button',
  imports: [NgStyle],
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent implements OnInit{
  @Input() text: string = '';
  @Input() color: string = ''
  @Output() btnClink = new EventEmitter()


  constructor() {}
  ngOnInit(): void {
  }
  onClick(){
    this.btnClink.emit()
  }

}
