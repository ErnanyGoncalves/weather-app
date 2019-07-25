import { Component, OnInit } from '@angular/core';
import { ApiReqService } from '../api-req.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  currentTime;

  cityWeather;
  forecasts;

  constructor(private apiReq: ApiReqService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.currentTime = new Date();
  
    const q = this.route.snapshot.params.cityID;

    this.apiReq.weatherReq(q).subscribe(res => {
      this.cityWeather = res;
      console.log(res);
    });
    
    this.apiReq.forecastReq(q).subscribe(res => {
      this.forecasts = res;
      console.log(this.forecasts);
    });
  }

}
