import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';
import {Injectable} from '@angular/core';

@Injectable()
export class ListService implements Resolve<any>{
  routeParams: any;
  url = environment.gitUrl;
  repository: any;

  onRepoChanged: BehaviorSubject<any>;

  constructor(private _httpClient: HttpClient) {
    this.onRepoChanged = new BehaviorSubject({});
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    this.routeParams = route.params;

    return new Promise((resolve, reject) => {

      Promise.all([
        this.getRepositoryList()
      ]).then(
        () => {
          resolve(true);
        },
        reject
      );
    });
  }

  getRepositoryList(): Promise<any> {
    return new Promise((resolve, reject) => {
      this._httpClient.get(this.url + 'users/' + this.routeParams.name + '/repos')
        .subscribe((response: any) => {
          this.repository = response;
          this.onRepoChanged.next(this.repository);
          resolve(response);
        }, reject);

    });
  }
}
