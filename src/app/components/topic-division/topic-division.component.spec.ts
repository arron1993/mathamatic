import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicDivisionComponent } from './topic-division.component';

describe('TopicDivisionComponent', () => {
  let component: TopicDivisionComponent;
  let fixture: ComponentFixture<TopicDivisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicDivisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
