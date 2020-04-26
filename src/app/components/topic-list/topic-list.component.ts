import { Component, OnInit } from '@angular/core';
import { TopicService } from '../../services/topic.service';
import {
  trigger,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
    selector: 'app-topic-list',
    templateUrl: './topic-list.component.html',
    styleUrls: ['./topic-list.component.scss'],
    animations: [
        trigger('difficultySlide', [
            transition(':enter', [
                style({transform: 'translateY(-200%)'}),
                animate('400ms ease-in', style({transform: 'translateY(0%)'}))
            ]),
            transition(':leave', [
                animate('0ms ease-in', style({transform: 'translateY(-100%)'}))
            ])
        ])
    ]
})

export class TopicListComponent implements OnInit {
    topics = [];
    selectedTopic;
    constructor(private ts: TopicService) { }

    ngOnInit() {
        this.topics = this.ts.getTopics();
    }

    selectTopic(topic) {
        this.selectedTopic = this.selectedTopic !== topic ? topic : undefined;
    }
}
