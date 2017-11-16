import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnInit {
  chart : any;
  

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      document.getElementById("mydiv").innerHTML = "New text!";

      this.chart = new Chart({
        chart: {
          type: 'line'
        },
        title: {
          text: 'Linechart'
        },
        credits: {
          enabled: false
        },
        series: [{
          name: 'Line 1',
          data: [1, 2, 3]
        }]
      });
    }
  }
}
