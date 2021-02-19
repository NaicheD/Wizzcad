import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HomeComponent} from './component/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {DataHttpService} from './service/http-service/data.http-service';
import {LoginService} from './service/http-service/login.http-service';
import {PrimengModule} from './module/primeng.module';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from './component/header/header.component';
import {TableComponent} from './component/table/table.component';
import {DataManager} from './manager/data.manager';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PrimengModule,
    FormsModule
  ],
  providers: [
    LoginService,
    DataHttpService,
    DataManager
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
