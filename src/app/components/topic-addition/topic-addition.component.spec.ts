import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicAdditionComponent } from './topic-addition.component';

describe('TopicAdditionComponent', () => {
  let component: TopicAdditionComponent;
  let fixture: ComponentFixture<TopicAdditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicAdditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
