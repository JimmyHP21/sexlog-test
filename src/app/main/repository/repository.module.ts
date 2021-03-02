import {NgModule} from '@angular/core';
import {RepositoryRoutingModule} from './repository-routing.module';
import { ListComponent } from './list/list.component';
import {MaterialModule} from '../../material/material.module';
import {CommonModule} from '@angular/common';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatRippleModule} from '@angular/material/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import { DetailsComponent } from './details/details.component';

@NgModule({
  imports: [
    RepositoryRoutingModule,
    MaterialModule,
    CommonModule,
    MatSortModule,
    MatPaginatorModule,
    MatRippleModule,
    FlexLayoutModule
  ],
  declarations: [ListComponent, DetailsComponent],
  exports: [],
  providers: []
})
export class RepositoryModule { }
