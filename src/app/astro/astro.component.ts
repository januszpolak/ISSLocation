import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-astro',
  templateUrl: './astro.component.html',
  styleUrls: ['./astro.component.css']
})
export class AstroComponent implements OnInit {

  // url api wih current number of astronauts in space
  url: string = 'http://api.open-notify.org/astros.json';

  number: any;
  people: any;
  name: any;
  craft: any;
  
  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    this.http.get(this.url).subscribe((result:any)=>{
      console.log(result.number, result.people);
      this.number = result.number;
      this.people = result.people;
      this.name = result.people.name;
      this.craft = result.people.craft;

      
    })

    
    
  }

}
