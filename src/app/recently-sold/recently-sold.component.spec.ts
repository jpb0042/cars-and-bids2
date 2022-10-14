import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlySoldComponent } from './recently-sold.component';

describe('RecentlySoldComponent', () => {
  let component: RecentlySoldComponent;
  let fixture: ComponentFixture<RecentlySoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentlySoldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentlySoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
