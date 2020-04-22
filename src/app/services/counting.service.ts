import { Injectable } from '@angular/core';
import { NumberGeneratorService } from './number-generator.service';

@Injectable({
  providedIn: 'root'
})
export class CountingService {

    constructor(private numGen: NumberGeneratorService) { }

    createQuestion() {
        const start = this.numGen.getRandomInteger(0, 50);
        const end = this.numGen.getRandomInteger(start, start + 10);
        const sequence = [];
        for (let i = start; i <= end; i++) {
            sequence.push(i);
        }

        const missingIndex = this.numGen.getRandomInteger(0, sequence.length - 1);
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
}
