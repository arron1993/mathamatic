import { Injectable } from '@angular/core';

import { NumberGeneratorService } from './number-generator.service';

@Injectable({
  providedIn: 'root'
})
export class SubtractionService {

    constructor(private numGen: NumberGeneratorService) { }

    createQuestion() {
        const firstNum = this.numGen.getRandomInteger(0, 50);
        const secondNum = this.numGen.getRandomInteger(0, firstNum);

        return {
            detail: `${firstNum} - ${secondNum} = `,
            answer: firstNum - secondNum
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
