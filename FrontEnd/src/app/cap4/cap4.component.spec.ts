import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cap4Component } from './cap4.component';

describe('Cap4Component', () => {
  let component: Cap4Component;
  let fixture: ComponentFixture<Cap4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cap4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cap4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
