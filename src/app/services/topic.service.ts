import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

    constructor() { }
    topics = [{
        name: 'Counting',
        icon: 'fa-count'
    }, {
        name: 'Addition',
        icon: 'fa-plus'
    }, {
        name: 'Subtraction',
        icon: 'fa-minus'
    }, {
        name: 'Multiplication',
        icon: 'fa-times'
    }, {
        name: 'Division',
        icon: 'fa-divide'
    }];

    getTopics() {
        return this.topics;
    }
}
