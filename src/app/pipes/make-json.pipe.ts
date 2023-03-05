import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'makeJson',
  pure:true
})
export class MakeJsonPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    console.log(value);
    // if(value.length > 3){
    //   const slicedStr = value.slice(0,3);
    //   return `${slicedStr}...`;
    // }else{
    //   return value;
    // }
    const convertIntoJson = JSON.stringify(value);
    return convertIntoJson;
  }

}
