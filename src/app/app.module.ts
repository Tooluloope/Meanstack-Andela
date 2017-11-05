import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentCenterComponent } from './student-center/student-center.component';
import {AppRoutingModule} from './app-routing.module';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import {FormsModule} from '@angular/forms';
import {StudentService} from './student.service';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentCenterComponent,
    StudentListComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
