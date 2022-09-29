import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsLeftComponent } from './cars-left.component';

describe('CarsLeftComponent', () => {
  let component: CarsLeftComponent;
  let fixture: ComponentFixture<CarsLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsLeftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarsLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
