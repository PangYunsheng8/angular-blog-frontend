import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clip'
})
export class ClipPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value.length > 100) {
      value = value.slice(0,100);
    }
    return value;
  }

}
