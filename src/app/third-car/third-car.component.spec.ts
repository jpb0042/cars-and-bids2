import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdCarComponent } from './third-car.component';

describe('ThirdCarComponent', () => {
  let component: ThirdCarComponent;
  let fixture: ComponentFixture<ThirdCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdCarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
