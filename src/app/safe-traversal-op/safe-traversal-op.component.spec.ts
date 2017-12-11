import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeTraversalOpComponent } from './safe-traversal-op.component';

describe('SafeTraversalOpComponent', () => {
  let component: SafeTraversalOpComponent;
  let fixture: ComponentFixture<SafeTraversalOpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafeTraversalOpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeTraversalOpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
