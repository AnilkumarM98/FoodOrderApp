import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(foods: any, term: any): any {
    if (term === undefined) return foods;

    return foods.filter(function (food: { [x: string]: { toString: () => string; }; }) {
      for (let property in food) {

        if (food[property] === null) {
          continue;
        }
        if (food[property].toString().toLowerCase().includes(term.toLowerCase())) {
          return true;
        }

      }
      return false;
    });
  }

}
