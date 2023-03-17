import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DashRoutingModule } from './dash-routing.module';
import { DashComponent } from './dash.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ChartComponent } from '../chart/chart.component';
import { NgChartsModule } from 'ng2-charts';
import { FilterableSettings, GridModule } from "@progress/kendo-angular-grid";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashRoutingModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    NgbModule,
    NgIf,
    NgbCarouselModule,
    MatInputModule,
    MatSelectModule,
    NgChartsModule,
    ReactiveFormsModule,
    FormsModule,
    GridModule
  ]
})
export class DashModule { }
