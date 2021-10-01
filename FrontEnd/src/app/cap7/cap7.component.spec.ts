import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cap7Component } from './cap7.component';

describe('Cap7Component', () => {
  let component: Cap7Component;
  let fixture: ComponentFixture<Cap7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cap7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cap7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
