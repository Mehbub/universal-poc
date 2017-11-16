import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { Meta, Title } from '@angular/platform-browser';

@Injectable()
export class PostService {

  constructor(private http: Http)
  {

  }

  	getBlogPost()
	{

		return this.http.get('http://letzpen.com/blog/rest-apis/?get=posts')
		.map(data  => {
			return data;
		});
	}

}
