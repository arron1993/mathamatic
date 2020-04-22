import { Component, OnInit } from '@angular/core';
import { AdditionService } from '../../services/addition.service';

@Component({
    selector: 'app-topic-addition',
    templateUrl: './topic-addition.component.html',
    styleUrls: ['./topic-addition.component.scss']
})
export class TopicAdditionComponent implements OnInit {
    questions = [];
    constructor(public additionService: AdditionService) { }

    ngOnInit() {
        for (let i = 0; i < 5; i++) {
            this.questions.push(this.additionService.createQuestion());
        }
    }
}
