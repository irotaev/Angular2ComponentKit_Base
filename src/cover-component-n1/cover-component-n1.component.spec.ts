import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverComponentN1Component } from './cover-component-n1.component';

describe('CoverComponentN1Component', () => {
  let component: CoverComponentN1Component;
  let fixture: ComponentFixture<CoverComponentN1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverComponentN1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverComponentN1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
