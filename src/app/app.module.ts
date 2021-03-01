import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SampleComponent} from './home/sample/sample.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutComponent} from './layout/layout.component';
import {MaterialModule} from './material/material.module';
import { HeaderComponent } from './layout/header/header.component';
import { SidenavListComponent } from './layout/sidenav-list/sidenav-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    LayoutComponent,
    HeaderComponent,
    SidenavListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,


    // ANGULAR MATERIAL
    MaterialModule,

    // FLEX LAYOUT
    FlexLayoutModule,

    RouterModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
