import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vowelOccurance'
})
export class VowelOccurancePipe implements PipeTransform {

  transform(value: String, ...args: unknown[]): String {
    let acount=0,ecount=0,icount=0,ocount=0,ucount=0;
    if(value){
    for(let i=0;i<value.length;i++){
      if(value[i].toLowerCase()==='a')
        acount++;
      else if (value[i].toLowerCase()==='e')
        ecount++;
      else if (value[i].toLowerCase()==='i')
        icount++;
      else if (value[i].toLowerCase()==='o')
        ocount++;
      else if (value[i].toLowerCase()==='u')
        ucount++;
    }    
    return 'a:' +acount+' e: '+ecount+' i: '+icount+' o: '+ocount+' u: '+ucount;
  }
  else{
    return ''
  }

  }

}
