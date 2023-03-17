import { NgModule } from '@angular/core';
import { NgbCarouselModule, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FilterableSettings } from "@progress/kendo-angular-grid";
import { GridModule } from '@progress/kendo-angular-grid';
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MatSortModule } from '@angular/material/sort';
import { DashComponent } from './dash/dash.component';
import { NgChartsModule } from 'ng2-charts';
import { NgIf } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ChartComponent } from './chart/chart.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { LabelModule } from "@progress/kendo-angular-label";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { IntlModule } from '@progress/kendo-angular-intl';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ChartComponent,
    DashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    NgbModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    NgbModule,
    NgChartsModule,
    NgbCarouselModule,
    NgIf,
    CarouselModule,
    NgChartsModule,
    DateInputsModule,
    GridModule,
    LabelModule,
    InputsModule,
    ReactiveFormsModule,
    IntlModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
