import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { XmlComponent } from './xml.component';

describe('XmlComponent', () => {
  let component: XmlComponent;
  let fixture: ComponentFixture<XmlComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ XmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
