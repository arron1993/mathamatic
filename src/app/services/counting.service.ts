import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountingService {

    constructor() { }

    getQuestion() {
        const start = this.getNumber(0, 50);
        const end = this.getNumber(start, start + 10);
        const sequence = [];
        for (let i = start; i <= end; i++) {
            sequence.push(i);
        }

        const missingIndex = this.getNumber(0, sequence.length - 1);
        const questionAnswer = sequence[missingIndex];
        sequence[missingIndex] = '_';
        return {
            detail: sequence,
            answer: questionAnswer,
            correct: undefined,
        };
    }

    markQuestion(question, answer) {
        let res = false;
        if (answer.toString() === question.answer.toString()) {
            res = true;
        }
        return res;
    }

    private getNumber(min, max) {
        return Math.ceil(Math.random() * (max - min) + min);
    }
}
