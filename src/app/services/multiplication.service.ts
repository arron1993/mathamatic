import { Injectable } from '@angular/core';
import { NumberGeneratorService } from './number-generator.service';

@Injectable({
    providedIn: 'root'
})
export class MultiplicationService {

    constructor(private numGen: NumberGeneratorService) { }

    createQuestion(difficulty) {
        const first = this.numGen.getRandomInteger(0, 10 * difficulty);
        const second = this.numGen.getRandomInteger(0, 10 * difficulty);
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
