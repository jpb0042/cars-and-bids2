import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitCarComponent } from './submit-car.component';

describe('SubmitCarComponent', () => {
  let component: SubmitCarComponent;
  let fixture: ComponentFixture<SubmitCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitCarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
