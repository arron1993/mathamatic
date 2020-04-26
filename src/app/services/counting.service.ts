import { Injectable } from '@angular/core';
import { NumberGeneratorService } from './number-generator.service';

@Injectable({
  providedIn: 'root'
})
export class CountingService {

    constructor(private numGen: NumberGeneratorService) { }

    createQuestion(difficulty: number) {
        const start = this.numGen.getRandomInteger(0, Math.pow(10, difficulty));
        const sequenceLength = 5;

        const sequenceStep = this.getStep(difficulty);
        const sequence = [];

        let nextNum = start;
        for (let i = 0; i <= sequenceLength; i++) {
            sequence.push(nextNum);
            nextNum += sequenceStep;
        }

        const missingIndex = this.numGen.getRandomInteger(0, sequence.length - 1);
        const questionAnswer = sequence[missingIndex];
        sequence[missingIndex] = ' _ ';
        return {
            detail: sequence.join(', '),
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

    private getStep(difficulty) {
        const start = 1;
        const end = Math.pow(difficulty, 2);
        return this.numGen.getRandomInteger(start, end);

    }
}
