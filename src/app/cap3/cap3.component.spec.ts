import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cap3Component } from './cap3.component';

describe('Cap3Component', () => {
  let component: Cap3Component;
  let fixture: ComponentFixture<Cap3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cap3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cap3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
