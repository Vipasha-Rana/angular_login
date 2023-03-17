import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";
@Component({
  selector: 'app-chart',
  templateUrl: './angle.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  @Input() chartType: any;
  @Input() chartData: any;
  @Input() chartOptions: any;
  @Input() chartPlugins: any;
  @Input() chartLegend: any;
  @Input() chartLabels: any;
}
