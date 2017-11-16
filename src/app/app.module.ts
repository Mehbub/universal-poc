import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { appRouterModule } from "./app.routes";
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ChartModule } from 'angular-highcharts';
import { HttpModule } from '@angular/http';

import { JobOpeningComponent } from './job-opening/job-opening.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PostService } from './post/post.service';
import { PostComponent } from './post/post.component';
import { environment } from '../environments/environment';
import { UserService } from './common/user.service';
import { LocalStorageModule } from 'angular-2-local-storage';
import { PusherService } from './common/pusher.service';
import { ReportAbuseService } from './common/report-abuse.service';
import { SocialShareService } from './common/social-share.service';
import { SocialFooterService } from './common/social-footer/social-footer.service';
import { SocialFooterComponent } from './common/social-footer/social-footer.component';
import { SocialBlogFooterService } from './common/social-blog-footer/social-blog-footer.service';
import { SocialBlogFooterComponent } from './common/social-blog-footer/social-blog-footer.component';
import { ApiService } from './common/services/api.service';
import { LiveFeedComponent } from './live-feed/live-feed.component';
import { LiveFeedService } from './live-feed/live-feed.service';
import { LimitToPipe } from './live-feed/limit-to.pipe';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { TourNgBootstrapModule } from 'ngx-tour-ng-bootstrap';
import { TagInputModule } from 'ngx-chips';
import { Angular2SocialLoginModule } from "angular2-social-login";
import { Ng2BootstrapModule } from 'ngx-bootstrap';

let providers = {
"google": {
"clientId": environment.googleClientId
},
"facebook": {
"clientId": environment.facebookClientId,
"apiVersion": environment.facebookApiVersion
}
};

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
JobOpeningComponent,
HomepageComponent,
PostComponent,
SocialFooterComponent,
SocialBlogFooterComponent,
LiveFeedComponent,
LimitToPipe
  ],
  imports: [
    appRouterModule,
    ChartModule,
    HttpModule,
FormsModule,
 ToastModule.forRoot(),
    TourNgBootstrapModule.forRoot(),
    Ng2BootstrapModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    LocalStorageModule.withConfig({
            prefix: 'my-app',
            storageType: 'localStorage'
        }),
TagInputModule,
    BrowserModule.withServerTransition({appId: 'my-app'}),
  ],
  providers: [
  UserService,
  PusherService,
  ReportAbuseService,
  SocialShareService,
  SocialFooterService,
  SocialBlogFooterService,
  ApiService,
LiveFeedService,
  PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
Angular2SocialLoginModule.loadProvidersScripts(providers);
