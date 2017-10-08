import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdcardTitleComponent } from './mdcard-title.component';

describe('MdcardTitleComponent', () => {
  let component: MdcardTitleComponent;
  let fixture: ComponentFixture<MdcardTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdcardTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdcardTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
