import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceEnCourComponent } from './conference-en-cour.component';

describe('ConferenceEnCourComponent', () => {
  let component: ConferenceEnCourComponent;
  let fixture: ComponentFixture<ConferenceEnCourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferenceEnCourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceEnCourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
