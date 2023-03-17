import { Component, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { Route } from '@angular/router';
declare var bootstrap: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    var myCarousel = new bootstrap.Carousel(document.getElementById('bannerCarousel'), {
      interval: 5000,
      wrap: true
    })
  }
}
