import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

    constructor() { }

    topics = [{
        name: 'Counting',
        icon: 'fa-count',
        difficulties: [1, 2, 3]
    }, {
        name: 'Addition',
        icon: 'fa-plus',
        difficulties: [1, 2, 3]
    }, {
        name: 'Subtraction',
        icon: 'fa-minus',
        difficulties: [1, 2, 3]
    }, {
        name: 'Multiplication',
        icon: 'fa-times',
        difficulties: [1]
    }, {
        name: 'Division',
        icon: 'fa-divide',
        difficulties: [1]
    }];

    getTopics() {
        return this.topics;
    }
}
