import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumeHttpPostComponent } from './consume-http-post.component';

describe('ConsumeHttpPostComponent', () => {
  let component: ConsumeHttpPostComponent;
  let fixture: ComponentFixture<ConsumeHttpPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumeHttpPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumeHttpPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
