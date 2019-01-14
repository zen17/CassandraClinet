import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedAdsComponent } from './liked-ads.component';

describe('LikedAdsComponent', () => {
  let component: LikedAdsComponent;
  let fixture: ComponentFixture<LikedAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikedAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
