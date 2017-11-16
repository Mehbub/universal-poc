import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http, Headers, RequestOptions } from '@angular/http';
@Injectable()
export class ApiService {

	constructor(private _http: Http) 
    {

    }

  	call(endpoint:string, method:string = 'GET', data:any = {}) {
		let headers = new Headers({ 'Accept': 'application/json' });
		headers.append('Authorization', `Bearer ${localStorage.getItem('auth_token')}`);
        let options = new RequestOptions({ headers: headers });

	    if (method.toUpperCase() == 'GET') {
		    return this._http.get(environment.remoteUrl+endpoint, options)
			.map(data  => {
				return data.json();
			}); 
		} 
		if (method.toUpperCase() == 'POST') {
		    return this._http.post(environment.remoteUrl+endpoint, objectToFormData(data), options)
			.map(data  => {
				return data.json();
			}); 
		}
        if (method.toUpperCase() == 'DELETE') {
            return this._http.delete(environment.remoteUrl+endpoint, options)
            .map(data  => {
                return data.json();
            }); 
        }
	}
};



const objectToFormData = function (obj, form = null, namespace = null) {

    var fd = form || new FormData();
    var formKey;
    for (var property in obj) {
        if (obj.hasOwnProperty(property)) {

            if (namespace) {
                formKey = namespace + '[' + property + ']';
            } else {
                formKey = property;
            }

            // if the property is an object, but not a File,
            // use recursivity.
            const value = obj[property];
            if (typeof value === 'object' && !(value instanceof File)) {
                objectToFormData(value, fd, formKey);
            } else if(value) {
                // if it's a string or a File object
                fd.append(formKey, value);
            }
        }
    }

    return fd;

};
