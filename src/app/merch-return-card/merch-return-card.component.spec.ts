import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchReturnCardComponent } from './merch-return-card.component';

describe('MerchReturnCardComponent', () => {
  let component: MerchReturnCardComponent;
  let fixture: ComponentFixture<MerchReturnCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchReturnCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchReturnCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
