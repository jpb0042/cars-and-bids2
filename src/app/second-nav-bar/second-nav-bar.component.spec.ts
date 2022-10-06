import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondNavBarComponent } from './second-nav-bar.component';

describe('SecondNavBarComponent', () => {
  let component: SecondNavBarComponent;
  let fixture: ComponentFixture<SecondNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
