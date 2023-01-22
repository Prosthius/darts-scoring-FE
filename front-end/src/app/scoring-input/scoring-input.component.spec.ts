import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoringInputComponent } from './scoring-input.component';

describe('ScoringInputComponent', () => {
  let component: ScoringInputComponent;
  let fixture: ComponentFixture<ScoringInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoringInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScoringInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
