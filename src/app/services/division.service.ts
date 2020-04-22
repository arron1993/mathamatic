import { Injectable } from '@angular/core';
import { NumberGeneratorService } from './number-generator.service';

@Injectable({
    providedIn: 'root'
})
export class DivisionService {

    constructor(private numGen: NumberGeneratorService) { }

    createQuestion() {
        const first = this.numGen.getRandomInteger(0, 50);
        const factors = [];

        for (let i = 0; i < first + 1; i++) {
            if (first % i === 0) {
                factors.push(i);
            }
        }

        // -1 from length so we get the last index.
        const second = factors[this.numGen.getRandomInteger(0, factors.length - 1)];

        return {
            detail: `${first} / ${second}`,
            answer: first / second
        };
    }


    markQuestion(question, answer) {
        let res = false;
        if (answer.toString() === question.answer.toString()) {
            res = true;
        }
        return res;
    }
}
