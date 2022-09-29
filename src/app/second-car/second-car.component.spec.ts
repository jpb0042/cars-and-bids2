import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondCarComponent } from './second-car.component';

describe('SecondCarComponent', () => {
  let component: SecondCarComponent;
  let fixture: ComponentFixture<SecondCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondCarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
