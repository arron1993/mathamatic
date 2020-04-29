import { Injectable } from '@angular/core';

import { NumberGeneratorService } from './number-generator.service';

@Injectable({
  providedIn: 'root'
})
export class SubtractionService {

    constructor(private numGen: NumberGeneratorService) { }

    createQuestion(difficulty) {
        const lowerBoundary = 0;
        let upperBoundary = difficulty * 10;
        const numbers = [];
        let questionAnswer;

        const numberCount = this.numGen.getRandomInteger(1, difficulty + 1);

        for (let i = 0; i < numberCount; i++) {
            let tmpNum = this.numGen.getRandomInteger(lowerBoundary, upperBoundary);
            if (difficulty > 1) {
                const negativeDecider = this.numGen.getRandomInteger(0, 3);
                tmpNum = negativeDecider === 1 ? tmpNum * -1 : tmpNum;
            } else {
                upperBoundary = tmpNum;
            }
            numbers.push(tmpNum);
            if (questionAnswer === undefined) {
                questionAnswer = tmpNum
            } else {
                questionAnswer -= tmpNum;
            }
        }
        return {
            detail: numbers.join(' - ') + ' =',
            answer: questionAnswer
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
