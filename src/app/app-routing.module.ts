import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultsearchComponent } from './resultsearch/resultsearch.component';
import { ResultviewComponent } from './resultview/resultview.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component'
import { AddresultsComponent } from './addresults/addresults.component';
import { AdminOverviewComponent } from './admin-overview/admin-overview.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component'
import { EventsComponent } from './events/events.component'
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component'

import { AuthGuard } from './Services/authentication/auth.guard';

const routes: Routes = [
  {path:'', redirectTo:'/adminLogin', pathMatch:'full'},
  {path:'resultsearch', component:ResultsearchComponent},
  {path:'resultview/:rollno/:course/:semester', component:ResultviewComponent},
  {path:'adminLogin', component:AdminLoginComponent},
  { path:'adminHome', 
    component:AdminHomeComponent,
    canActivate: [AuthGuard],
    children:[
      {path:'admindashboard', component: AdminDashboardComponent,data: { animation: 'isLeft' } },
      {path: 'addresults', component: AddresultsComponent},
      {path: 'adminoverview', component: AdminOverviewComponent, children:[{path:'adminSignup', component:AdminSignupComponent}], data: { animation: 'isRight' }}
      
      
    ]
  },
  
  {path:'events', component:EventsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };

export const routiingComponents = [ ResultsearchComponent, 
  ResultviewComponent, 
  AdminLoginComponent, 
  AdminHomeComponent, 
  AddresultsComponent, 
  AdminOverviewComponent,
  AdminSignupComponent,
  EventsComponent,
AdminDashboardComponent ];
