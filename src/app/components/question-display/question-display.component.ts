import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-question-display',
  templateUrl: './question-display.component.html',
  styleUrls: ['./question-display.component.scss']
})
export class QuestionDisplayComponent implements OnInit {
    @Input() service;

    currentAnswer = '';
    totalCorrect = 0;

    questions: any[] = [];

    questionIndex = 0;

    onQuestionAnswer = new Subject<any>();

    difficulty: number;

    constructor(private route: ActivatedRoute) {
        this.onQuestionAnswer.pipe(debounceTime(250)).subscribe(e => {
            this.mark();
        });
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.difficulty = parseInt(params.difficulty, 10);
            this.addQuestion();
        })
    }

    mark() {
        const res = this.service.markQuestion(this.question, this.currentAnswer);
        this.question.correct = res;
        this.totalCorrect = this.questions.filter(q => q.correct).length;
    }

    addQuestion() {
        this.questions.push(this.service.createQuestion(this.difficulty));
    }

    nextQuestion() {
        this.resetAnswer()
        if (this.questionIndex === this.questions.length - 1) {
            this.addQuestion();
        }
        this.questionIndex++;
    }

    previousQuestion() {
        this.resetAnswer()
        if (this.questionIndex !== 0) {
            this.questionIndex--;
        }
    }

    resetAnswer() {
        this.currentAnswer = '';
    }
    get question() {
        return this.questions[this.questionIndex];
    }
}
