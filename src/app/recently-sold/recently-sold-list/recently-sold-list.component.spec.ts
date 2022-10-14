import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlySoldListComponent } from './recently-sold-list.component';

describe('RecentlySoldListComponent', () => {
  let component: RecentlySoldListComponent;
  let fixture: ComponentFixture<RecentlySoldListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentlySoldListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentlySoldListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
