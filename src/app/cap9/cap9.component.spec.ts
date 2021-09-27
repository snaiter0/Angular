import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cap9Component } from './cap9.component';

describe('Cap9Component', () => {
  let component: Cap9Component;
  let fixture: ComponentFixture<Cap9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cap9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cap9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
