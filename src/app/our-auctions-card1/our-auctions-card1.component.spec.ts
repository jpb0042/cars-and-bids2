import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurAuctionsCard1Component } from './our-auctions-card1.component';

describe('OurAuctionsCard1Component', () => {
  let component: OurAuctionsCard1Component;
  let fixture: ComponentFixture<OurAuctionsCard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurAuctionsCard1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurAuctionsCard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
