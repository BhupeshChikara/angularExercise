import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() contact:string;

  @Output() isClear = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  clear(){
    this.isClear.emit('')
  }

}
