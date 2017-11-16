import { Injectable } from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
@Injectable()
export class UserService {
constructor( @Inject(PLATFORM_ID) private platformId: Object ) {
        }

    get id()
    {
               if (isPlatformBrowser(this.platformId)) {

                return window.localStorage.getItem('id');
            }

            else {
                return '';
            }    }

    set id(value)
    {
    if (isPlatformBrowser(this.platformId)) {

        window.localStorage.setItem('id', value);
     }

            else {
            }
    }

    get userName()
    {
if (isPlatformBrowser(this.platformId)) {

                return 	window.localStorage.getItem('userName');}
 else {
                return ''
            }
    }

    set userName(value)
    {
     if (isPlatformBrowser(this.platformId)) {

        window.localStorage.setItem('userName', value);}
 else {
            }
    }

    get about()
    {
     if (isPlatformBrowser(this.platformId)) {
     return window.localStorage.getItem('about');
     }
else {
                return ''
            }
    }

    set about(value)
    {
       if (isPlatformBrowser(this.platformId)) {
      window.localStorage.setItem('about', value);}
else {
            }
    }

    get mobile()
    {if (isPlatformBrowser(this.platformId)) {
        return window.localStorage.getItem('mobile');
}
else {
                return ''
            }
    }

    set mobile(value)
    {
if (isPlatformBrowser(this.platformId)) {
         window.localStorage.setItem('mobile', value);
}
else {
            }
    }

    get location()
    {
       if (isPlatformBrowser(this.platformId)) {
        return window.localStorage.getItem('location');
}
else {
                return ''
            }

    }

    set location(value)
    {
        if (isPlatformBrowser(this.platformId)) {
      window.localStorage.setItem('location', value);
}
else {
            }
    }

    set medal(value)
    {
if (isPlatformBrowser(this.platformId)) {
      window.localStorage.setItem('medal', value);
}
else {
            }
    }

    get medal()
    {
        if (isPlatformBrowser(this.platformId)) {
     return window.localStorage.getItem('medal');
}
else {
                return ''
            }
    }

    set title(value)
    {
      if (isPlatformBrowser(this.platformId)) {
       window.localStorage.setItem('title', value);
}
else {
            }
    }

    get title()
    {
        if (isPlatformBrowser(this.platformId)) {
     return window.localStorage.getItem('title');
}
else {
                return ''
            }
    }

    set email(value)
    {
      if (isPlatformBrowser(this.platformId)) {
       window.localStorage.setItem('email', value);
}
else {
            }
    }

    get email()
    {
        if (isPlatformBrowser(this.platformId)) {
     return  window.localStorage.getItem('email');
}
else {
                return ''
            }
    }

    get name()
    {
    	if (isPlatformBrowser(this.platformId)) {
     return  window.localStorage.getItem('name');
}
else {
                return ''
            }

    }

    set name(value)
    {
    if (isPlatformBrowser(this.platformId)) {
     	window.localStorage.setItem('name', value);
}
else {
            }

    }

    get imageUrl()
    {
        if (isPlatformBrowser(this.platformId)) {
     return window.localStorage.getItem('profile_image');}
else {
                return ''
            }

    }

    set imageUrl(value)
    {
      if (isPlatformBrowser(this.platformId)) {
       window.localStorage.setItem('profile_image', value);
}
else {
            }
    }

    get type()
    {
    	if (isPlatformBrowser(this.platformId)) {
     return window.localStorage.getItem('user_type');
}
else {
                return ''
            }
    }

    set type(value)
    {
    if (isPlatformBrowser(this.platformId)) {
     	window.localStorage.setItem('user_type', value);
}
else {
            }
    }

    get creatorTypeForReport()
    {
        if (isPlatformBrowser(this.platformId)) {
     return window.localStorage.getItem('creator_type_for_report');
}
else {
                return ''
            }
    }

    set creatorTypeForReport(value)
    {

        if (isPlatformBrowser(this.platformId)) {
       window.localStorage.setItem('creator_type_for_report', value);
}
else {
            }
    }

    get creatorIdForReport()
    {
        if (isPlatformBrowser(this.platformId)) {
     return window.localStorage.getItem('creator_id_for_report');
}
else {
                return ''
            }
    }

    set creatorIdForReport(value)
    {
      if (isPlatformBrowser(this.platformId)) {
       window.localStorage.setItem('creator_id_for_report', value);
}
else {
            }
    }

    get administeredSchoolId()
    {
        if (isPlatformBrowser(this.platformId)) {
     return window.localStorage.getItem('administered_school_id');
}
else {
                return ''
            }
    }

    set administeredSchoolId(value)
    {
      if(value)     {  if (isPlatformBrowser(this.platformId)) {
 window.localStorage.setItem('administered_school_id', value);
}
}
else {
            }

    }

    get authToken()
    {
        if (isPlatformBrowser(this.platformId)) {
     return window.localStorage.getItem('auth_token')
}
else {
                return ''
            }

    }

    set authToken(value)
    {
      if (isPlatformBrowser(this.platformId)) {
       window.localStorage.setItem('auth_token', value);
}
else {
            }

    }

    get isLoggedIn()
    {
         if (isPlatformBrowser(this.platformId)) {
     return !!this.authToken;
}
else {
                return ''
            }

    }

    get isSuperAdmin()
    {
         if (isPlatformBrowser(this.platformId)) {
     return this.type == 'Admin'
}
else {
                return ''
            }
    }

    get isSchoolAdmin()
    {
         if (isPlatformBrowser(this.platformId)) {
     return  !!window.localStorage.getItem('administered_school_id');
}
else {
                return ''
            }
    }

    logout()
    {
       if (isPlatformBrowser(this.platformId)) {
     return   window.localStorage.clear();
}
else {
                return ''
            }
    }

    set schoolSlug(value)
    {
       if (isPlatformBrowser(this.platformId)) {
       window.localStorage.setItem('school_slug', value);
}
else {
            }
    }

    get schoolSlug()
    {
        if (isPlatformBrowser(this.platformId)) {
     return  window.localStorage.getItem('school_slug')
}
else {
                return ''
            }
    }

    set createdType(value)
    {
       if (isPlatformBrowser(this.platformId)) {
       window.localStorage.setItem('createdType', value);
}
else {
            }
    }

    get createdType()
    {
        if (isPlatformBrowser(this.platformId)) {
     return  window.localStorage.getItem('createdType')
}
else {
                return ''
            }

    }

    set authAdmin(value)
    {
       if (isPlatformBrowser(this.platformId)) {
      window.localStorage.setItem('auth_admin', value);
}
else {
            }

    }

    get authAdmin()
    {
        if (isPlatformBrowser(this.platformId)) {
     return window.localStorage.getItem('auth_admin')
}
else {
                return ''
            }

    }


    set currentCity(value)
    {
       if (isPlatformBrowser(this.platformId)) {
      window.localStorage.setItem('currentCity', value);
}
else {
            }

    }

    get currentCity()
    {
        if (isPlatformBrowser(this.platformId)) {
     return window.localStorage.getItem('currentCity')
}
else {
                return ''
            }

    }

    set currentState(value)
    {
      if (isPlatformBrowser(this.platformId)) {
       window.localStorage.setItem('currentState', value);
}
else {
            }

    }

    get currentState()
    {
        if (isPlatformBrowser(this.platformId)) {
     return window.localStorage.getItem('currentState')
}
else {
                return ''
            }

    }

    set currentCityStatus(value)
    {
      if (isPlatformBrowser(this.platformId)) {
       window.localStorage.setItem('currentCityStatus', value);
}
else {
            }

    }

    get currentCityStatus()
    {
           if (isPlatformBrowser(this.platformId)) {
     return  window.localStorage.getItem('currentCityStatus')
}
else {
                return ''
            }

    }

    set searchCity(value)
    {
       if (isPlatformBrowser(this.platformId)) {
      window.localStorage.setItem('searchCity', value);
}
else {
            }

    }

    get searchCity()
    {
        if (isPlatformBrowser(this.platformId)) {
     return window.localStorage.getItem('searchCity')
     }
else {
                return ''
            }


    }

    set searchCityStatus(value)
    {
       if (isPlatformBrowser(this.platformId)) {
      window.localStorage.setItem('searchCityStatus', value);
}
else {
            }
    }

    get searchCityStatus()
    {
        if (isPlatformBrowser(this.platformId)) {
     return window.localStorage.getItem('searchCityStatus')
}
else {
                return ''
            }
    }

    set userFormattedAddress(value)
    {
      if (isPlatformBrowser(this.platformId)) {
       window.localStorage.setItem('userFormattedAddress', value);
}
else {
            }

    }

    get userFormattedAddress()
    {
        if (isPlatformBrowser(this.platformId)) {
     return window.localStorage.getItem('userFormattedAddress')
}
else {
                return ''
            }

    }

    set searchFormattedAddress(value)
    {
       if (isPlatformBrowser(this.platformId)) {
      window.localStorage.setItem('searchFormattedAddress', value);
}
else {
            }
    }

    get searchFormattedAddress()
    {
         if (isPlatformBrowser(this.platformId)) {
     return window.localStorage.getItem('searchFormattedAddress')
}
else {
                return ''
            }
    }
}
