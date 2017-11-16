import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class SocialShareService {

  constructor() { }

	shareOnFB(url, img, title, desc)
	{
		// we should pass &redirect_uri={redirect_url} with current url if required
		let link = 'https://www.facebook.com/dialog/feed?app_id='+environment.facebookClientId+'&caption=Zedua';
		if(url)
		{
			link += '&link='+url;
		}
		if(img)
		{
			link += '&picture='+img;
		}
		if(title)
		{
			link += '&name='+title;
		}
		if(desc)
		{
			link += '&description='+desc;
		}
		window.open(link);
	}

	shareOnGoogle(url)
	{
		let link = 'https://plus.google.com/share';
		if(url)
		{
			link += '?url='+url;
		}
		window.open(link);
		//https://plus.google.com/share?url=http://letzpen.com/schools/p-s-harasar/events/test-june-4-event
		//window.open('https://www.facebook.com/sharer.php?s=100&p[url]='+url+'&p[images][0]='+img+'&p[title]='+title+'&p[summary]='+desc+'')
	}

	shareOnTwitter(url, title)
	{
		let link = 'https://twitter.com/intent/tweet?&=myZedua&hashtags=myZedua';
		if(url)
		{
			link += '  '+url;
		}
		if(title)
		{
			link += '&text='+title;
		}
		window.open(link);
		//https://twitter.com/intent/tweet?url={url}&text={title}&via={via}&hashtags={hashtags}
		//window.open('https://twitter.com/intent/tweet?url='+url+'&text='+title+'&via='+via+'&hashtags='+hashtags+'')
	}

	shareOnLinkedIn(url, title, desc)
	{
		let link = 'https://www.linkedin.com/shareArticle?';
		if(url)
		{
			link += 'url='+url;
		}
		if(title)
		{
			link += '&title='+title;
		}
		if(desc)
		{
			link += '&summary='+desc;
		}
		window.open(link);
		//https://www.linkedin.com/shareArticle?mini=true&url=http://developer.linkedin.com&title=LinkedIn%20Developer%20Network&summary=My%20favorite%20developer%20program&source=LinkedIn
		//window.open('https://www.facebook.com/sharer.php?s=100&p[url]='+url+'&p[images][0]='+img+'&p[title]='+title+'&p[summary]='+desc+'')
	}

}
