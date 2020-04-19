import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicCountingComponent } from './topic-counting.component';

describe('TopicCountingComponent', () => {
  let component: TopicCountingComponent;
  let fixture: ComponentFixture<TopicCountingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicCountingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicCountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
