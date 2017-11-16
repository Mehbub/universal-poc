import { Component, OnInit, Input } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { environment } from '../../../environments/environment';
import { SocialBlogFooterService } from './social-blog-footer.service';

import { SocialShareService } from '../social-share.service';
import { UserService } from '../user.service';

import { ApiService } from '../services/api.service';

@Component({
  selector: 'social-blog-footer',
  templateUrl: './social-blog-footer.component.html',
  styleUrls: ['./social-blog-footer.component.css']
})
export class SocialBlogFooterComponent implements OnInit {
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
    @Input('liked') liked: string;
    @Input('likes_count') likes_count: number;
    @Input('tags') tags: string;
    @Input('share_image') share_image: string;

	newComment;
	secondaryBaseUrl = environment.secondaryBaseUrl;

  	constructor(private socialBlogFooterService: SocialBlogFooterService, private socialShareService: SocialShareService, public toastr: ToastsManager, private user: UserService,  private service: ApiService)
  	{
       /* this.emojiPickerOptions.setEmojiSheet({
          url: 'sheet_apple_32.png',
          locator: EmojiPickerAppleSheetLocator
        });*/
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
            this.socialBlogFooterService.likePost(this.content_id).subscribe(data => {

                if(data.success)
                {
                    this.liked = data.current_user_liked;
                    this.liked_or_not=data.current_user_liked;
                    if(data.current_user_liked == true)
                    {
                        this.likes_count++;
                    }
                    else
                    {
                        this.likes_count--;
                    }
                }
                else
                {
                    this.toastr.error(data.error);
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                }
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

            this.socialBlogFooterService.liveFeedComment(this.content_id, this.newComment).subscribe(data => {
                const newComment = {
                    commentable_type: this.content_type,
                    commentable_id: this.content_id,
                    content: this.newComment,
                    id : data,
                    name : this.user.name
                };
                this.comments.push(newComment);
                this.newComment="";
                this.comments_count++

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
                this.socialBlogFooterService.deleteComment(comment_id).subscribe(data => {
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
