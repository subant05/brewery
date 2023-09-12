import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBreweryRequestParams } from '../interfaces/brewreyRequestParams';

@Injectable({
  providedIn: 'root'
})
export class BreweryService {

  constructor(private http: HttpClient) { }

  private buildBreweriesUrl(params:IBreweryRequestParams ={}){
    let url = "/breweries"

    if(params?.id){
      url += "/" + params.id
    }
     return  url + Object
        .entries(params)
        .filter(entry=> entry[0] !== "id")
        .map(entry=> `${entry[0]}=${entry[1]}`)
        .join("&")

  }

  public getBreweries(params?:IBreweryRequestParams){
    return this.http.get<any>(this.buildBreweriesUrl(params) )
  }
}
