import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'workerpipe'
})
export class WorkerpipePipe implements PipeTransform {

  transform(value: Array<any>, searchbar?: string): Array<any> {

    let arrAfter: Array<any>=[];

    if(searchbar!=""){

      value = value.filter(item=>item.Car_Number.indexOf(searchbar) > -1)
      return value;
 
    }


     else if(searchbar==""){

      return value;
 
    }

  }
}
