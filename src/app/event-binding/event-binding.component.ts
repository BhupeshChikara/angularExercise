import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  name:string;
  email:string;
  
  constructor() { }

  ngOnInit(): void {
  }

  submit=()=>{
    console.log(this.name+'    '+this.email)
  }


}
