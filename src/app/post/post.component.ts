import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

    public blogPost;
    public blogCount;

  constructor(private postService: PostService,meta: Meta, title: Title)
  {
title.setTitle('My Spiffy Home Page');

    meta.addTags([
      {
        name: 'mehbub', content: 'blogs of zedua'
      },
      {
        name: 'keywords', content: 'demo for blogs'
      },
      {
        name: 'description', content: 'This is my great description.'
      },
    ])
  }

  ngOnInit()
  {
  	this.postService.getBlogPost().subscribe(data => {
            this.blogPost = JSON.parse(data['_body']);
            this.blogCount = this.blogPost.length;
        },
    error => {

    });
  }

}
