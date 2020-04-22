import { Component, OnInit } from '@angular/core';

import { DivisionService } from '../../services/division.service';

@Component({
    selector: 'app-topic-division',
    templateUrl: './topic-division.component.html',
    styleUrls: ['./topic-division.component.scss']
})
export class TopicDivisionComponent implements OnInit {
    constructor(public divisionService: DivisionService) { }

    ngOnInit() {}
}
