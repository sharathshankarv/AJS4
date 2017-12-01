import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClassOnConditionComponent } from './add-class-on-condition.component';

describe('AddClassOnConditionComponent', () => {
  let component: AddClassOnConditionComponent;
  let fixture: ComponentFixture<AddClassOnConditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClassOnConditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClassOnConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
