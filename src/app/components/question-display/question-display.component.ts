import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question-display',
  templateUrl: './question-display.component.html',
  styleUrls: ['./question-display.component.scss']
})
export class QuestionDisplayComponent implements OnInit {
    questions: any[] = [];
    @Input() service;

    constructor() { }

    ngOnInit() {
        this.addQuestion();
    }

    mark(event, question) {
        const res = this.service.markQuestion(question, event.target.value);
        question.correct = res;
    }

    addQuestion() {
        this.questions.push(this.service.createQuestion());
    }
}
