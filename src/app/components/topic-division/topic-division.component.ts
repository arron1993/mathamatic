import { Component, OnInit } from '@angular/core';

import { DivisionService } from '../../services/division.service';

@Component({
    selector: 'app-topic-division',
    templateUrl: './topic-division.component.html',
    styleUrls: ['./topic-division.component.scss']
})
export class TopicDivisionComponent implements OnInit {
    questions: any[] = [];

    constructor(public divisionService: DivisionService) { }

    ngOnInit() {
        this.addQuestion();
    }

    addQuestion() {
        this.questions.push(this.divisionService.createQuestion());
    }
}
