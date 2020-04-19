import { Injectable } from '@angular/core';
import { NumberGeneratorService } from './number-generator.service';

@Injectable({
  providedIn: 'root'
})
export class AdditionService {

    constructor(private numGen: NumberGeneratorService) { }

    getQuestion() {
        const first = this.numGen.getRandomInteger(0, 20);
        const second = this.numGen.getRandomInteger(0, 20);
        return {
            detail: `${first} + ${second} = `,
            answer: first + second
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
