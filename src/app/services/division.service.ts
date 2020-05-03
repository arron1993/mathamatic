import { Injectable } from '@angular/core';
import { NumberGeneratorService } from './number-generator.service';

@Injectable({
    providedIn: 'root'
})
export class DivisionService {

    constructor(private numGen: NumberGeneratorService) { }

    createQuestion(difficulty) {
        // instead of trying to divide things, multiply them instead
        // its easier to get reasonable questions without having to work
        // out factors
        const first = this.numGen.getRandomInteger(1, 10 * difficulty);
        const second = this.numGen.getRandomInteger(1, 10);
        const answer = first * second
        return {
            detail: `${answer} / ${second}`,
            answer: first
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
