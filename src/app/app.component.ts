import { Component, Renderer2, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';


declare const L:any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ISSLocation';

  // ISS current location API url
  url: string = 'http://api.open-notify.org/iss-now.json';

  // positions variables
  latitude: any = '';
  longitude: any = '';



  constructor(private http:HttpClient, private renderer:Renderer2){}

  ngOnInit(){

    this.getLocation();
    
  }

  getLocation(){
    this.http.get(this.url).subscribe((res:any)=>{
      console.log(res.iss_position.latitude, res.iss_position.longitude);

      // positions variables from url
      this.latitude = res.iss_position.latitude;
      this.longitude = res.iss_position.longitude;
    
      // loading leaflet map
    let map = L.map('map').setView([this.latitude,this.longitude], 4);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
    }).addTo(map);
    
    // add map marker to show currnet position
    let marker = L.marker([this.latitude,this.longitude]).addTo(map);
    })
    
  }

  // create refresh function to reload map and ISS position
  refresh(){
    const map = document.getElementById("map")?.remove();
    let div = this.renderer.createElement('div');
    this.renderer.setProperty(div, 'id', 'map');
    this.renderer.appendChild(document.body, div);
   

    this.getLocation(); 
  }
  
}
