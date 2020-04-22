import { Component, OnInit } from '@angular/core';
import { CountingService } from '../../services/counting.service';

@Component({
    selector: 'app-topic-counting',
    templateUrl: './topic-counting.component.html',
    styleUrls: ['./topic-counting.component.scss']
})
export class TopicCountingComponent implements OnInit {
    constructor(public countingService: CountingService) { }

    ngOnInit() {}
}
