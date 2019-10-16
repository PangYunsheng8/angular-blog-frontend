import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'computeTags'
})
export class ComputeTagsPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.map(i=>i.name).join(",");
  }

}
