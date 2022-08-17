import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ISSLocation';

  // ISS current location API url
  url = 'http://api.open-notify.org/iss-now.json';


  constructor(private http:HttpClient){}

  ngOnInit(){

    this.getLocation();
  }

  getLocation(){
    this.http.get(this.url).subscribe((res:any)=>
    console.log(res))
  }









}
