import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cap6Component } from './cap6.component';

describe('Cap6Component', () => {
  let component: Cap6Component;
  let fixture: ComponentFixture<Cap6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cap6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cap6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
