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
                style({transform: 'translateX(-200%)'}),
                animate('400ms 230ms ease-in', style({
                    transform: 'translateX(0%)'}))
            ]),
            transition(':leave', [
                style({position: 'absolute'}),
                animate('200ms ease-in', style({
                    transform: 'translateX(200%)'}))
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
