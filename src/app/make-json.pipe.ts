import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'makeJson',
  pure:true
})
export class MakeJsonPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log(value);
    const convertIntoJson = JSON.stringify(value);
    return convertIntoJson;
  }

}
