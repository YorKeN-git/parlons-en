import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceALaUneComponent } from './conference-ala-une.component';

describe('ConferenceALaUneComponent', () => {
  let component: ConferenceALaUneComponent;
  let fixture: ComponentFixture<ConferenceALaUneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferenceALaUneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceALaUneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
