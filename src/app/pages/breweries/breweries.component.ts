import { Component, OnInit } from '@angular/core';
import { BreweryService } from 'src/app/services/brewery.service';
import { map,pipe } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-breweries',
  templateUrl: './breweries.component.html',
  styleUrls: ['./breweries.component.scss']
})
export class BreweriesComponent implements OnInit{
  public breweries: Array<any> = []  
  public currentBrewery: any = {
    latitude: 0,
    longitude:  0
  }
  panelOpenState = false;
  

  constructor(
    private router: Router,
    private breweryService: BreweryService){

  }

  ngOnInit(): void {
    this.breweryService.getBreweries().pipe(map(response=>
      response.map((data:any)=>{
        return {
          ...data,
          longitude: parseFloat(data.longitude),
          latitude: parseFloat(data.latitude)
      }
      })

    )).subscribe((response: any) => {
      this.breweries = response
      this.currentBrewery = this.breweries[0] ?? this.currentBrewery 
    }, (error)=>{

    })
  }

  onMarkerClick(e:any, index?: number){
    console.log(e)
  }

  onListItemClick(e:any){
    console.log(e)
    this.currentBrewery = e
  }

  onListItemDoubleClick(e:any){
    console.log(e)
    this.currentBrewery = e
    this.router.navigate(["brewery", e.id])
  }

}
