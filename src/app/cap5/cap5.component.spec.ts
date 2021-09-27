import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cap5Component } from './cap5.component';

describe('Cap5Component', () => {
  let component: Cap5Component;
  let fixture: ComponentFixture<Cap5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cap5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cap5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
