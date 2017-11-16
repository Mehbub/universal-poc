import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { UserService } from './user.service';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ReportAbuseService {
	constructor(private _http: Http, private user: UserService) 
	{
		
	}

	reportAbuse(abuseData)
	{	
		const data = {
			content_type : abuseData.content_type,
            content_id : abuseData.content_id,
            creator_type : this.user.creatorTypeForReport,
            creator_id : this.user.creatorIdForReport,
            authorization : `Bearer ${this.user.authToken}`
        };
        
		// content_type,content_id,creator_type,creator_id
		let headers = new Headers({ 'Authorization': `Bearer ${this.user.authToken}` });
        let options = new RequestOptions({ headers: headers });
		return this._http.post(environment.remoteUrl+'report-abuse', data, options)
		.map(data  => {
			
			return data.json();
		}); 

	}

}
