import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRouteSnapshot, Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {GithubService} from '../../sample/service/github.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Location} from '@angular/common';
import {ListService} from './service/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'private', 'stars', 'edit'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator, {static: true})
  paginator: MatPaginator;

  @ViewChild(MatSort, {static: true})
  sort: MatSort;

  constructor(private _listService: ListService,
              private _router: Router, private _location: Location) { }

  ngOnInit(): void {
    const list = this._listService.repository
      .sort((a, b) => a.stargazers_count > b.stargazers_count ? -1 : a.stargazers_count < b.stargazers_count ? 1 : 0);
    this.dataSource = new MatTableDataSource<any>(list);
    this.filterAndPaginator();
  }

  filterAndPaginator(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  goToDetails(element): void {
    this._router.navigateByUrl('/repo/details', {state: element});
  }

  goBack(): void{
    this._location.back();
  }
}
