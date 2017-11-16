import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(meta: Meta, title: Title) {

  title.setTitle('My Spiffy Home Page');

    meta.addTags([
      {
        name: 'mehbub', content: 'trackode'
      },
      {
        name: 'keywords', content: 'testing my app'
      },
      {
        name: 'description', content: 'This is my homepage description.'
      },
    ])
 }

  ngOnInit() {
  }

}
