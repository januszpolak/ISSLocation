import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare const L:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ISSLocation';

  // ISS current location API url
  url = 'http://api.open-notify.org/iss-now.json';

  // positions variables
  latitude: any = '';
  longitude: any = '';

  constructor(private http:HttpClient){}

  ngOnInit(){

    this.getLocation();
  }

  getLocation(){
    this.http.get(this.url).subscribe((res:any)=>{
      console.log(res.iss_position.latitude, res.iss_position.longitude);

      // positions variables from url
      this.latitude = res.iss_position.latitude;
      this.longitude = res.iss_position.longitude;

    let map = L.map('map').setView([this.latitude,this.longitude], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
    }).addTo(map);

    let marker = L.marker([this.latitude,this.longitude]).addTo(map);

    })
    
  }









}
