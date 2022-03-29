import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingBtnComponent } from './rating-btn.component';

describe('RatingBtnComponent', () => {
  let component: RatingBtnComponent;
  let fixture: ComponentFixture<RatingBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
