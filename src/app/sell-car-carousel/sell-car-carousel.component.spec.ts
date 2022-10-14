import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellCarCarouselComponent } from './sell-car-carousel.component';

describe('SellCarCarouselComponent', () => {
  let component: SellCarCarouselComponent;
  let fixture: ComponentFixture<SellCarCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellCarCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellCarCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
