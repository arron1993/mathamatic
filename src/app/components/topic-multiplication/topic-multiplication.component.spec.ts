import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicMultiplicationComponent } from './topic-multiplication.component';

describe('TopicMultiplicationComponent', () => {
  let component: TopicMultiplicationComponent;
  let fixture: ComponentFixture<TopicMultiplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicMultiplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicMultiplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
