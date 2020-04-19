import { Component, OnInit } from '@angular/core';
import { CountingService } from '../../services/counting.service';

@Component({
  selector: 'app-topic-counting',
  templateUrl: './topic-counting.component.html',
  styleUrls: ['./topic-counting.component.scss']
})
export class TopicCountingComponent implements OnInit {

    constructor(private cs: CountingService) { }

    questions = [];
    ngOnInit() {
        for (let i = 0; i < 5; i++) {
            this.questions.push(this.cs.getQuestion());
        }
    }

    mark(event, question) {
        const res = this.cs.markQuestion(question, event.target.value);
        question.correct = res;
    }
}
