import { Injectable } from '@angular/core';
import { NumberGeneratorService } from './number-generator.service';

@Injectable({
    providedIn: 'root'
})
export class MultiplicationService {

    constructor(private numGen: NumberGeneratorService) { }

    createQuestion() {
        const first = this.numGen.getRandomInteger(0, 10);
        const second = this.numGen.getRandomInteger(0, 10);
        return {
            detail: `${first} x ${second} = `,
            answer: first * second
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
