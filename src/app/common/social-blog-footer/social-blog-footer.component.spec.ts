import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialBlogFooterComponent } from './social-blog-footer.component';

describe('SocialBlogFooterComponent', () => {
  let component: SocialBlogFooterComponent;
  let fixture: ComponentFixture<SocialBlogFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialBlogFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialBlogFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
