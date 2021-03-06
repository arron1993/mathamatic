import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberGeneratorService {

    constructor() { }

    getRandomInteger(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
}
