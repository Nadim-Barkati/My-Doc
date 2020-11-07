import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../../services/profile.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {


selectedCity: string = '';
cities: any = [
  'Tunis',
  'Manouba',
  'Ariana',
  'Sousse',
  
];
//function that handle the selected city in the radio and return it's value 
radioChangeHandler(event:any){
  this.selectedCity = event.target.value;
  console.log(this.selectedCity)
}
//function that should send a post request to the server
buttonOnClick(event:any){
console.log('button clicked !');
let city = this.selectedCity
console.log(city)
}


  constructor(private profileService : ProfileService) {

   }

  ngOnInit(): void {
    
  }

}
