import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ListComponent} from './list/list.component';
import {DetailsComponent} from './details/details.component';
import {ListService} from './list/service/list.service';
import {DetailsService} from './details/service/details.service';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: ':name',
        component: ListComponent,
        resolve: {
          data: ListService
        }
      },
      {
        path: 'details/:name/:repo',
        component: DetailsComponent,
        resolve: {
          data: DetailsService
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepositoryRoutingModule { }
