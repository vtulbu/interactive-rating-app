import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanksCardComponent } from './thanks-card.component';

describe('ThanksCardComponent', () => {
  let component: ThanksCardComponent;
  let fixture: ComponentFixture<ThanksCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThanksCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThanksCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
