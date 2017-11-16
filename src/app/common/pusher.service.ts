import { Injectable } from '@angular/core';
declare var Pusher: any;

@Injectable()
export class PusherService {
	public pusher;
	constructor()
	{
	  	this.pusher = new Pusher('cbf5fcd42e6aaf6e0c17', {
      		cluster: 'ap2',
      		encrypted: true
    	});
	}

}
