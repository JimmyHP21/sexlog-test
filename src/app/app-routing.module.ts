import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SampleComponent} from './main/sample/sample.component';

const routes: Routes = [
  {
    path: '',
    component: SampleComponent
  },
  {
    path: 'repo',
    loadChildren: () => import('./main/repository/repository.module').then((m) => m.RepositoryModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
