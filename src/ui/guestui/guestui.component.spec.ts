import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestuiComponent } from './guestui.component';

describe('GuestuiComponent', () => {
  let component: GuestuiComponent;
  let fixture: ComponentFixture<GuestuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestuiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
