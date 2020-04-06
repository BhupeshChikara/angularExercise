import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  
  show:boolean=true;
  change:boolean=true;
  items=[
    {name:'Bhupesh',id:4021},
    {name:'Vipul',id:4022},
    {name:'Yash',id:4023},
    {name:'Varun',id:4024},
    {name:'Naveen',id:4025},
    {name:'Nishtha',id:4026},
    {name:'Tushar',id:4027},
    {name:'Devansh',id:4028},
    {name:'Siddhant',id:4029},
    {name:'Jay',id:4030},
    {name:'Saket',id:4031}
  ]
  name:string="Bhupesh"
  text:string="Set Value"
  
  constructor() { }

  ngOnInit(): void {
  }

}
