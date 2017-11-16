import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { UserService } from '../common/user.service';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class LiveFeedService {

  constructor(private _http: Http, private user: UserService)
  {

  }

    getLiveFeeds()
    {
        if ((this.user.currentCity == null) || (this.user.currentState == null))
        {
            this.user.currentCity = "Bengaluru";
            this.user.currentState = "Karnataka";
        }
        if(this.user.isLoggedIn)    //when user loggedin
        {
            const data = {
                authorization : `Bearer ${this.user.authToken}`
            };

            let headers = new Headers({ 'Authorization': data.authorization });
            let options = new RequestOptions({ headers: headers });

            return this._http.get(environment.remoteUrl+'feeds/local/'+this.user.currentCity+'/'+this.user.currentState, options)
            .map(data  => {
                data.json();
             return data.json();
            });
        }
        else        //when user not loggedin
        {
            return this._http.get(environment.remoteUrl+'feeds/local/'+this.user.currentCity+'/'+this.user.currentState)
            .map(data  => {
                data.json();
             return data.json();
            });
        }


    }

    getLiveFeedsScroll(nextPageUrl)
    {
        if(this.user.isLoggedIn)
        {
            const data = {
                authorization : `Bearer ${this.user.authToken}`
            };
            let headers = new Headers({ 'Authorization': data.authorization });
            let options = new RequestOptions({ headers: headers });

            return this._http.get(nextPageUrl, options)
                .map(data  => {
                data.json();
                return data.json();
            });
        }
        else
        {
            return this._http.get(nextPageUrl)
                .map(data  => {
                data.json();
                return data.json();
              });
        }


    }

    toggleLike(data)
    {

        let headers = new Headers({ 'Authorization': data.authorization });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(environment.remoteUrl+'toggle-like', data, options)
        .map(data  => {
            return data.json();
        });
    }

    liveFeedComment(data)
    {
        let headers = new Headers({ 'Authorization': data.authorization });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(environment.remoteUrl+'comment', data, options)
        .map(data  => {
            return data.json();
        });
    }

    getBlogFeeds(pageCount)
    {
        return this._http.get(environment.blogUrl+'rest-apis/?get=feeds&page_num='+pageCount)
        .map(data  => {
            return data;
        });
    }

}
