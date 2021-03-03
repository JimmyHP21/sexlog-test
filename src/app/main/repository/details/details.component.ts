import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {DetailsService} from './service/details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  dataToEdit: any;
  constructor(private _detailsService: DetailsService, private _location: Location) {}

  ngOnInit(): void {
    this.dataToEdit = this._detailsService.repository;
  }

  goBack(): void{
    this._location.back();
  }
}
