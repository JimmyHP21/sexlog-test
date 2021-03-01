import {Component, ElementRef, Injectable, OnInit, ViewChild} from '@angular/core';
import {fromEvent, Subject} from 'rxjs';
import {debounce, debounceTime, distinctUntilChanged, takeUntil} from 'rxjs/operators';
import {GithubService} from '../../service/github.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
  @ViewChild('filter', {static: true})
  filter: ElementRef;

  selectOptions = [];
  selectedFilter = '';

  // Private
  private _unsubscribeAll: Subject<any>;
  constructor(private _gitService: GithubService) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    fromEvent(this.filter.nativeElement, 'keyup')
      .pipe(
        takeUntil(this._unsubscribeAll),
        debounceTime(250),
        distinctUntilChanged()
      ).subscribe(() => {
        if (this.filter.nativeElement.value.length > 4) {
          const filterValue = this.filter.nativeElement.value;
          this._gitService
            .searchUser(filterValue)
            .subscribe((data) => {
              console.log(data);
            }, (error) => {
              console.log(error);
            });
        }
    });
  }

}
