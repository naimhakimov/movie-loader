import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(value: any[], text: string = ''): any {

    if (!text.trim()) {
      return value;
    }

    return value.filter(item => {
      return item.title.toLocaleLowerCase().includes(text.toLocaleLowerCase());
    });
  }


}
