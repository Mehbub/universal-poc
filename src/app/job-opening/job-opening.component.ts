import { Component, OnInit,PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-job-opening',
  templateUrl: './job-opening.component.html',
  styleUrls: ['./job-opening.component.css']
})
export class JobOpeningComponent implements OnInit {

 constructor(meta: Meta, title: Title) {

    title.setTitle('My about page');

    meta.addTags([
      {
        name: 'author', content: 'Gary Simon'
      },
      {
        name: 'keywords', content: 'kws'
      },
      {
        name: 'description', content: 'aaaaaaaaaaaaaaaaaaaaaa.'
      },
    ])

  }

  ngOnInit() {
  }

}
