import { Injectable } from '@angular/core';
import { NumberGeneratorService } from './number-generator.service';

@Injectable({
  providedIn: 'root'
})
export class AdditionService {

    constructor(private numGen: NumberGeneratorService) { }

    createQuestion(difficulty) {
        const lowerBoundary = 0;
        const upperBoundary = Math.pow(10, difficulty);

        const numbers = [];
        let questionAnswer = 0;
        const numberCount = this.numGen.getRandomInteger(1, Math.pow(2, difficulty));

        for (let i = 0; i < numberCount; i++) {
            const tmpNum = this.numGen.getRandomInteger(lowerBoundary, upperBoundary);
            numbers.push(tmpNum);
            questionAnswer += tmpNum;
        }
        return {
            detail: numbers.join(' + ') + ' =',
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
