import { Injectable } from '@angular/core';
import { UserService } from '../user.service';
import { environment } from '../../../environments/environment';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SocialBlogFooterService {

	constructor(private http: Http, private user: UserService)
  	{

  	}

    likePost(postId)
    {
        return this.http.get(environment.blogUrl+'rest-apis/?action=like&post_id='+postId)
        .map(data  => {
            return data.json();
        });        
    }

    liveFeedComment(contentId, newComment)
    {
        return this.http.get(environment.blogUrl+'rest-apis/?action=comment&content_id='+contentId+'&comment='+newComment)
        .map(data  => {
            return data.json();
        }); 

    }

    deleteComment(id)
    {
        return this.http.get(environment.blogUrl+'rest-apis/?action=commentDelete&comment_id='+id)
        .map(data  => {
            return data.json();
        });
    }

}
