import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

import { SocialFooterComponent } from '../common/social-footer/social-footer.component';
import { SocialBlogFooterComponent } from '../common/social-blog-footer/social-blog-footer.component';
import { LiveFeedService } from './live-feed.service';
import { ReportAbuseService } from '../common/report-abuse.service';
import { SocialShareService } from '../common/social-share.service';
import { UserService } from '../common/user.service';
import { environment } from '../../environments/environment';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { InfiniteScroll } from 'angular2-infinite-scroll';


@Component({
    selector: 'app-live-feed',
    templateUrl: './live-feed.component.html',
    styleUrls: ['./live-feed.component.css']
})

export class LiveFeedComponent implements OnInit {
    liveFeeds = [];
    blogFeeds = [];
    pagination;
    secondaryBaseUrl = environment.secondaryBaseUrl;
    content_link;
    creator_link;
    private comment;
    description_min_limit = 140;
    description_max_limit = 240;
    pageCount = 2;
    nextPageStatus: boolean;
    nextBlogApi: boolean = true;
    nextfeedApi: boolean = true;


    constructor(@Inject(PLATFORM_ID) private platformId: Object, private liveFeedService: LiveFeedService, private socialShareService: SocialShareService, public toastr: ToastsManager, private reportAbuseService: ReportAbuseService, private user: UserService)
    {
    if (isPlatformBrowser(this.platformId)) {

}
    }

    ngOnInit()
    {
        this.liveFeedService.getLiveFeeds().subscribe(data => {
            this.liveFeeds = data.data;
            this.pagination = data.pagination;
            this.liveFeedService.getBlogFeeds(1).subscribe(data => {
                this.blogFeeds = JSON.parse(data['_body']);
                if (this.blogFeeds)
                {
                    this.nextPageStatus = true;
                }
                else
                {
                    this.nextPageStatus = false;
                }
                for (var i=0; i<this.blogFeeds.length; i++)
                {
                    this.liveFeeds.push(this.blogFeeds[i]);
                }
                /*this.liveFeeds.sort((a: any, b: any) => {
                    a = new Date(a.created_at);
                    b = new Date(b.created_at);
                    return a>b ? -1 : a<b ? 1 : 0;
                });*/
                for (var i = 0; i < this.liveFeeds.length; i++)
                {
                    this.openGallary(i);
                }
            });

        });
    }

    seeMore(feed)
    {
        feed.readMore = this.description_max_limit;
    }

    openGallary(imageSectionId)
    {

    }

    postDetailsLink(feed)
    {
        switch(feed.content.type)
        {
            case 'App\\Models\\Hotshot':
                this.content_link = `schools/${feed.creator.slug}/legends/${feed.content.slug}`;
                break;
            case 'App\\Models\\Achievement':
                this.content_link = `schools/${feed.creator.slug}/achievements/${feed.content.slug}`;
                break;
            case 'App\\Models\\Event':
                this.content_link = `schools/${feed.creator.slug}/events/${feed.content.slug}`;
                break;
            case 'App\\Models\\Audio':
                this.content_link = `schools/${feed.creator.slug}/prayers`;
                break;
            case 'App\\Models\\MediaCoverage':
                this.content_link = `schools/${feed.creator.slug}/media-coverages/${feed.content.slug}`;
                break;
            case 'App\\Models\\Job':
                this.content_link = `jobs/${feed.content.slug}`;
                break;
            case 'App\\Models\\Post':
                this.content_link = `user/${feed.creator.slug}/post/${feed.content.slug}`;
                break;

            case 'App\\Models\\Album':
                switch(feed.creator.type)
                {
                    case 'App\\Models\\School':
                        this.content_link = `schools/${feed.creator.slug}/galleries/${feed.content.slug}`;
                        break;
                    case 'App\\Models\\User':
                        this.content_link = `user/${feed.creator.slug}/album-view`;
                        break;
                }
                break;
        }

        if(feed.content.type == 'App\\Models\\Post')
        {
            return this.content_link;
        }
        if(feed.content.type == 'Blog')
        {
            // return feed.content.url;
            var url = feed.content.url;
            var blogUrl = url.split(this.secondaryBaseUrl);     //rmeove baseUrl from feed.content.url
            return blogUrl['1'];
        }

        // return this.secondaryBaseUrl+""+this.content_link;
        return this.content_link;

    }

    getCreatorProfile(feed)
    {
        if(feed.creator.type == 'App\\Models\\School')
        {
            return `school/${feed.creator.slug}/details/live-feed`;
        }
        if(feed.creator.type == 'App\\Models\\User')
        {
            return `user/${feed.creator.slug}`;
        }
    }

    ngAfterViewInit()
    {

    }

    onScrollDown ()
    {

        if((this.pagination != undefined) && (this.pagination.total != this.liveFeeds.length) && (this.nextfeedApi))
        {
            this.nextfeedApi = false;
            this.liveFeedService.getLiveFeedsScroll(this.pagination.nextPageUrl).subscribe(data => {
                this.pagination = data.pagination;
                this.nextfeedApi = true;
                var items = data.data;
                for (var i = 0; i < items.length; i++)
                {
                    this.liveFeeds.push(items[i]);
                    this.openGallary(this.liveFeeds.length - 1);
                }
            });
        }
        if(this.nextPageStatus && this.nextBlogApi)
        {
            this.nextBlogApi = false;
            this.liveFeedService.getBlogFeeds(this.pageCount).subscribe(data => {
                var blogItems = JSON.parse(data['_body']);
                this.nextBlogApi = true;
                if (blogItems.length)
                {
                    this.pageCount++;
                    this.nextPageStatus = true;
                }
                else
                {
                    this.nextPageStatus = false;
                }

                for (var i=0; i<blogItems.length; i++)
                {
                    this.liveFeeds.push(blogItems[i]);
                    this.openGallary(this.liveFeeds.length - 1);
                }
                /*this.liveFeeds.sort((a: any, b: any) => {
                    a = new Date(a.created_at);
                    b = new Date(b.created_at);
                    return a>b ? -1 : a<b ? 1 : 0;
                });*/
            });
        }
    }

}
