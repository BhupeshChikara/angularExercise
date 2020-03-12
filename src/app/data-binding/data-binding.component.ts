import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  userName:string;
  constructor() { }

  ngOnInit(): void {
  }

  clear(form){
    console.log(form.value)
    form.reset();
  }

}
