import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiReqService {
  apiURL: string = "https://api.openweathermap.org/data/2.5/";
  configs: string = "&APPID=76d1b43ba3695cfae59aa9f7dc9b4877&units=metric";

  constructor(private httpClient: HttpClient) { }

  citiesReq(cityQ:string){
    const mainURL = this.apiURL + 'find?q=' + cityQ + this.configs;
    return this.httpClient.get(mainURL, {
      observe: "body",
      responseType: "json"
    });
  }

  weatherReq(cityID:number){
    const mainURL = this.apiURL + 'weather?id=' + cityID + this.configs;
    return this.httpClient.get(mainURL, {
      observe: "body",
      responseType: "json"
    });
  }

  forecastReq(cityID:number){
    const mainURL = this.apiURL + 'forecast?id=' + cityID + this.configs;
    return this.httpClient.get(mainURL, {
      observe: "body",
      responseType: "json"
    });
  }
}
