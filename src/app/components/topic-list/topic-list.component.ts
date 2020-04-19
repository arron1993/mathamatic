import { Component, OnInit } from '@angular/core';
import { TopicService } from '../../services/topic.service';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss']
})

export class TopicListComponent implements OnInit {
    topics = [];

    constructor(private ts: TopicService) { }

    ngOnInit() {
        this.topics = this.ts.getTopics();
    }

}
