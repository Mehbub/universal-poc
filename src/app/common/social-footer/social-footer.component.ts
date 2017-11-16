import { Component, OnInit, Input } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { environment } from '../../../environments/environment';
import { SocialFooterService } from './social-footer.service';
import { ReportAbuseService } from '../report-abuse.service';
import { SocialShareService } from '../social-share.service';
import { UserService } from '../user.service';


@Component({
  selector: 'social-footer',
  templateUrl: './social-footer.component.html',
  styleUrls: ['./social-footer.component.css']
})
export class SocialFooterComponent implements OnInit {
	@Input('share_desc') share_desc: string;
    @Input('share_pic_url') share_pic_url: string;
    @Input('share_title') share_title: string;
    @Input('creator_slug') creator_slug: string;
    @Input('content_slug') content_slug: string;
    @Input('shares_count') shares_count: string;
    @Input('liked_or_not') liked_or_not: string;
    @Input('likes_users') likes_users: any;
    @Input('content_id') content_id: string;
    @Input('content_type') content_type: string;
    @Input('comments') comments: any;
    @Input('comments_count') comments_count: number;
    @Input('creator_type') creator_type: string;
    @Input('creator_id') creator_id: string;
    @Input('content_link') content_link: string;
    @Input('comments_limit') comments_limit: string;
    @Input('liked') liked: any;
    @Input('likes_count') likes_count: any;
    @Input('tags') tags: string;
    @Input('share_image') share_image: string;


	newComment;
	secondaryBaseUrl = environment.secondaryBaseUrl;

  	constructor(private socialFooterService: SocialFooterService, private reportAbuseService: ReportAbuseService, private socialShareService: SocialShareService, public toastr: ToastsManager, private user: UserService)
  	{

  	}

  	ngOnInit()
  	{

  	}

    addEmonji($event)
    {
        if(!this.newComment)
        {
            this.newComment = $event.char;
        }
        else
        {
            this.newComment += " "+$event.char;
        }
    }

    toggleLike()
    {
        if(this.user.isLoggedIn)
        {
            const data = {
                likeable_type : this.content_type,
                likeable_id : this.content_id,
                authorization : `Bearer ${this.user.authToken}`
            };
            this.liked = !(this.liked);
            this.likes_count = (this.liked) ? this.likes_count+1 : this.likes_count-1;
            this.socialFooterService.toggleLike(data).subscribe(data => {

                this.liked = data.current_user_liked;
                this.likes_count = data.likes_count;
                this.likes_users=data.likes_users;

            });
        }
        else
        {
            document.getElementById("loginPopup").click();
        }
    }

    liveFeedComment()
    {
        if(this.user.isLoggedIn)
        {
            const data = {
                commentable_type: this.content_type,
                commentable_id: this.content_id,
                content: this.newComment,
                authorization : `Bearer ${this.user.authToken}`
            };

            this.socialFooterService.liveFeedComment(data).subscribe(data => {

                this.comments.push(data.data);
                this.newComment="";
                this.comments_count++;
            });
        }
        else
        {
            document.getElementById("loginPopup").click();
        }

    }

    deleteComment(comment_id, index)
    {
        if(this.user.isLoggedIn)
        {
            if (confirm('Are you sure?')) {
                this.socialFooterService.deleteComment(comment_id).subscribe(data => {
                    if(data.status)
                    {
                        this.comments_count--;
                        document.getElementById("comment-"+index).remove();
                    }
                });
            }
        }
        else
        {
            document.getElementById("loginPopup").click();
        }
    }

    reportAbuseOnComment(commentId)
    {
        if(confirm('Do you think it has abusive content ?'))
        {
            const data = {
                content_type : 'App\\Models\\Comment',
                content_id : commentId
            };

            this.reportAbuseService.reportAbuse(data).subscribe(data => {
                this.toastr.success(data.message);
            });
        }
    }

    socialShare(provider, url, img, title, desc)
    {
        if(provider == 'facebook')
        {
            this.socialShareService.shareOnFB(this.secondaryBaseUrl+''+url, img, title, desc);
        }
        if(provider == 'google')
        {
            this.socialShareService.shareOnGoogle(this.secondaryBaseUrl+''+url);
        }
        if(provider == 'twitter')
        {
            this.socialShareService.shareOnTwitter(this.secondaryBaseUrl+''+url, title );
        }
        if(provider == 'linkedin')
        {
            this.socialShareService.shareOnLinkedIn(this.secondaryBaseUrl+''+url, title, desc);
        }
    }

}
