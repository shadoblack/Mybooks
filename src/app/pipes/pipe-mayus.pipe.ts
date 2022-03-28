import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeMayus'
})
export class PipeMayusPipe implements PipeTransform {

  transform(value:string): string 
  {
    let result: string;
    result = "Ref-" + value;
    return result;
  }

}
