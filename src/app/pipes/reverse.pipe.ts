import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: String, ...args: unknown[]): String {
    let newValue=''
    console.log('hello'+value)
    if(value)
    for(let i = value.length-1;i>=0;i--)
     newValue+=value.charAt(i)
    return newValue;
  }

}
