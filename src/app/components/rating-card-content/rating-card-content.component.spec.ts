import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingCardContentComponent } from './rating-card-content.component';

describe('RatingCardContentComponent', () => {
  let component: RatingCardContentComponent;
  let fixture: ComponentFixture<RatingCardContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingCardContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
