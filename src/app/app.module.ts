import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'


import { AppRoutingModule, routiingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PapaParseModule } from 'ngx-papaparse';
import { ExportAsModule } from 'ngx-export-as';

//material

import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatSelectModule} from '@angular/material/select'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatSidenavModule, MatSidenav} from '@angular/material/sidenav'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatTabsModule} from '@angular/material/tabs';




//services
import {GetResultService} from './Services/get-result.service';
import {ResultCrudService} from './Services/result-crud.service';
import {AuthService} from './Services/authentication/auth.service'
import {EventService} from './Services/authentication/event.service';

import { AuthGuard } from './Services/authentication/auth.guard';
import {TokenInterceptorService} from './Services/authentication/token-interceptor.service';
import { DashboardService } from './Services/dashboard.service';
import { NavbarComponent } from './navbar/navbar.component'


@NgModule({
  declarations: [
    AppComponent,
    routiingComponents,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PapaParseModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ExportAsModule,
    
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatSidenavModule,
    MatIconModule,
    MatTabsModule
    
  ],
  providers: [ResultCrudService, GetResultService, AuthService, AuthGuard, EventService,DashboardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
