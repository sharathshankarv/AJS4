import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstLetterUppercasePipeComponent } from './first-letter-uppercase-pipe.component';

describe('FirstLetterUppercasePipeComponent', () => {
  let component: FirstLetterUppercasePipeComponent;
  let fixture: ComponentFixture<FirstLetterUppercasePipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstLetterUppercasePipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstLetterUppercasePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
