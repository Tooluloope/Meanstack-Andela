import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../home/home/home.component';
import {ResourceComponent} from '../resource/resource/resource.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'resource', component: ResourceComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
