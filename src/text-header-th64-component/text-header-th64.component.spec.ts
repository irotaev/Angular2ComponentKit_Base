import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextHeaderTh64Component } from './text-header-th64.component';

describe('TextHeaderTh64Component', () => {
  let component: TextHeaderTh64Component;
  let fixture: ComponentFixture<TextHeaderTh64Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextHeaderTh64Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextHeaderTh64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
