import { Routes,RouterModule  } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { JobOpeningComponent } from './job-opening/job-opening.component';
import { HomepageComponent } from './homepage/homepage.component';




// Route config let's you map routes to components
const routes: Routes = [
    // map '/persons' to the people list component
    {
      path: 'about',
      component: JobOpeningComponent,
    },{
      path: 'test',
      component: HomepageComponent,
    },
    // map '/' to '/main' as our default route
    {
      path: '',
      redirectTo: '/',
      pathMatch: 'full'
    },
  ];

  export const appRouterModule = RouterModule.forRoot(routes);


