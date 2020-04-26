import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'topicDifficulty'
})
export class TopicDifficultyPipe implements PipeTransform {

    diffcultyMap = {
        1: 'Easy',
        2: 'Medium',
        3: 'Hard',
    };

    transform(value: number, ...args: any[]): string {
        return this.diffcultyMap[value];
    }

}
