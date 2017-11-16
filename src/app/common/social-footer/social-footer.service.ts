import { Injectable } from '@angular/core';
import { UserService } from '../user.service';
import { environment } from '../../../environments/environment';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SocialFooterService {

  constructor(private http: Http, private user: UserService)
  {

  }

    toggleLike(data)
    {

        let headers = new Headers({ 'Authorization': data.authorization });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(environment.remoteUrl+'toggle-like', data, options)
        .map(data  => {
            return data.json();
        }); 
    }

    liveFeedComment(data)
    {
        let headers = new Headers({ 'Authorization': data.authorization });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(environment.remoteUrl+'comment', data, options)
        .map(data  => {
            return data.json();
        });
    }

    deleteComment(id)
    {
        let headers = new Headers({ 'Authorization': `Bearer ${this.user.authToken}` });
        let options = new RequestOptions({ headers: headers });

        return this.http.delete(environment.remoteUrl+'comment/'+id, options)
        .map(data  => {
            return data.json();
        });
    }

}
