import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCarComponent } from './first-car.component';

describe('FirstCarComponent', () => {
  let component: FirstCarComponent;
  let fixture: ComponentFixture<FirstCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstCarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
