import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  public filterForm:FormGroup = new FormGroup({
    name: new FormControl(null),
    state: new FormControl(null),
    zipcode: new FormControl(null),
    type: new FormControl(null),

  })

  constructor(private filterService: FilterService){}

  ngOnInit(): void {
    
  }
}
