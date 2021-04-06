import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuskeruiComponent } from './buskerui.component';

describe('BuskeruiComponent', () => {
  let component: BuskeruiComponent;
  let fixture: ComponentFixture<BuskeruiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuskeruiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuskeruiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
