import { Component, OnInit } from '@angular/core';

import { MultiplicationService } from '../../services/multiplication.service';

@Component({
  selector: 'app-topic-multiplication',
  templateUrl: './topic-multiplication.component.html',
  styleUrls: ['./topic-multiplication.component.scss']
})
export class TopicMultiplicationComponent implements OnInit {
    questions: any[] = [];

    constructor(public multiplicationService: MultiplicationService) { }

    ngOnInit() {
        this.addQuestion();
    }

    addQuestion() {
        this.questions.push(this.multiplicationService.createQuestion());
    }
}
