import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cap2Component } from './cap2.component';

describe('Cap2Component', () => {
  let component: Cap2Component;
  let fixture: ComponentFixture<Cap2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cap2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cap2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
