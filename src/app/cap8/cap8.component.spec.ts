import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cap8Component } from './cap8.component';

describe('Cap8Component', () => {
  let component: Cap8Component;
  let fixture: ComponentFixture<Cap8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cap8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cap8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
