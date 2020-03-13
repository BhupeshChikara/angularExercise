import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  phone:string;

  constructor() { }

  ngOnInit(): void {

  }
  
  clear(value){
    console.log(value)
    this.phone='';
  }

}
