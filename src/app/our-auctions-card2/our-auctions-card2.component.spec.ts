import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurAuctionsCard2Component } from './our-auctions-card2.component';

describe('OurAuctionsCard2Component', () => {
  let component: OurAuctionsCard2Component;
  let fixture: ComponentFixture<OurAuctionsCard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurAuctionsCard2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurAuctionsCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
