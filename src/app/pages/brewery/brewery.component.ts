import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BreweryService } from 'src/app/services/brewery.service';
import { IBreweryResponse } from 'src/app/interfaces/breweryResponse';

@Component({
  selector: 'app-brewery',
  templateUrl: './brewery.component.html',
  styleUrls: ['./brewery.component.scss']
})
export class BreweryComponent implements OnInit {

  public brewery: IBreweryResponse | undefined

  constructor(
    private acivatedRoute: ActivatedRoute,
    private breweryService: BreweryService
  ){
    
  }

  ngOnInit(): void {
    if(this.acivatedRoute.snapshot.params['id']){
      console.log(this.acivatedRoute.snapshot.params['id'])

      this.breweryService.getBreweries({
        id:this.acivatedRoute.snapshot.params['id']
      }).subscribe((response:IBreweryResponse)=>{
          this.brewery = response
      })

    }
  }
}
