import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTextComponent } from './text-header-th36.component';

describe('HeaderTextComponent', () => {
  let component: HeaderTextComponent;
  let fixture: ComponentFixture<HeaderTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
