import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceAVenirComponent } from './conference-avenir.component';

describe('ConferenceAVenirComponent', () => {
  let component: ConferenceAVenirComponent;
  let fixture: ComponentFixture<ConferenceAVenirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferenceAVenirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceAVenirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
