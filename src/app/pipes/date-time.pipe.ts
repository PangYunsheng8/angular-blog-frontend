import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTime'
})
export class DateTimePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let year = value.split('-')[0]
    let month = value.split('-')[1]
    let day = value.split('-')[2].slice(0,2)
    let hour = value.split(':')[0].slice(-2)
    let minute = value.split(':')[1]
    let second = value.split(':')[2].slice(0,2)
    let filterTime = `${year}-${month}-${day} ${hour}:${minute}:${second}`
    return filterTime;
  }

}
