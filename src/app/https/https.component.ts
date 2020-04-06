import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-https',
  templateUrl: './https.component.html',
  styleUrls: ['./https.component.css']
})
export class HttpsComponent implements OnInit {
  data;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts/1/comments').subscribe(res=>{
      console.log(res)
      this.data=res;
    },err=>{
      console.log(err)
    })
  }

}
