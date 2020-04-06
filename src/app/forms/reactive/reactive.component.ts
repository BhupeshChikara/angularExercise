import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  
  myForm=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{9,})/)]),
    city:new FormControl('',[Validators.required]),
    gender:new FormControl('',[Validators.required]),
    photo:new FormControl('',[Validators.required])
  })
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.myForm.value)
  }

}
