import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicSubtractionComponent } from './topic-subtraction.component';

describe('TopicSubtractionComponent', () => {
  let component: TopicSubtractionComponent;
  let fixture: ComponentFixture<TopicSubtractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicSubtractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicSubtractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
