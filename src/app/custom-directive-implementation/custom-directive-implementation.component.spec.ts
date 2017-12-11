import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDirectiveImplementationComponent } from './custom-directive-implementation.component';

describe('CustomDirectiveImplementationComponent', () => {
  let component: CustomDirectiveImplementationComponent;
  let fixture: ComponentFixture<CustomDirectiveImplementationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomDirectiveImplementationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDirectiveImplementationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
