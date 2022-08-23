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

  ISSArr: any[] = [];
  TanArr: any[] = [];

  element:any;
  iss:any;
  tan:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    this.http.get(this.url).subscribe((result:any)=>{
      console.log(result.number, result.people);
      this.number = result.number;
      this.people = result.people;
      this.name = result.people.name;
      this.craft = result.people.craft;

      // for loop for print crafts in console.log
      for (let i = 0; i < this.people.length; i++) {
        const element = this.people[i].craft;
        console.log(element);
        

        // push name of station into new array
        if (element === "ISS") {
          this.ISSArr.push(element)
          
        }else if (element === "Tiangong") {
          this.TanArr.push(element)
          
        }else {
          console.log("Differnet station");
          
        }
      }
      // count how many stations elements are in new arrray to know how many people are in different stations
       console.log(this.ISSArr.length);
       console.log(this.TanArr.length);

       this.iss = this.ISSArr.length;
       this.tan = this.TanArr.length;
    })

    
    
  }

}
