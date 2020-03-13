import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  userName:string;
  name:string="hello";
  constructor() { }

  ngOnInit(): void {
  }

  clear(form:NgForm){
    console.log(form.value)
    form.reset()
  }

  submit(value){
    console.log(value.value)
  }

}
