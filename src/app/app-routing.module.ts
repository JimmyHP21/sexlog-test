import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SampleComponent} from './home/sample/sample.component';

const routes: Routes = [
  {
    path: '',
    component: SampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
