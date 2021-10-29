import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorttext'
})
export class ShorttextPipe implements PipeTransform {

  transform(text: string, length: number = 100): any {
    if (text) {
      const len = text.length;
      if (len > length)
        return text.substr(0, length) + '...';
      return text;
    }
    return text;
  }

}
