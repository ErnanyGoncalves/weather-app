import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiReqService } from '../api-req.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  cities;

  constructor(private apiReq: ApiReqService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const q = this.route.snapshot.queryParams['q'];
    console.log(q);
    if (typeof q !== "undefined" || this.route.params['search'])
      this.searchCity(q);
  }

  searchCity(cityName: string) {
    this.apiReq.citiesReq(cityName).subscribe(res => {
      this.cities = res;
      this.router.navigate(['search'], { queryParams: { q: cityName } })
      console.log(this.cities);
    });
  }
}
