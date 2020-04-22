import { Component, OnInit } from '@angular/core';

import { SubtractionService } from '../../services/subtraction.service';

@Component({
    selector: 'app-topic-subtraction',
    templateUrl: './topic-subtraction.component.html',
    styleUrls: ['./topic-subtraction.component.scss']
})
export class TopicSubtractionComponent implements OnInit {

    questions: any[] = [];
    constructor(public subtractionService: SubtractionService) { }

    ngOnInit() {
        this.addQuestion();
    }

    addQuestion() {
        this.questions.push(this.subtractionService.createQuestion());
    }
}
