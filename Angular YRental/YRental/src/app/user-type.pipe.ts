import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
  name: 'userType'
})
export class UserTypePipe implements PipeTransform {

  transform(value: Array<any>, args?:number): Array<any> {

    let arrAfter: Array<any>=[];

    for (let i = 0; i < value.length; i++) {

      if (value[i].User_Type==args)
      {
        arrAfter.push(value[i]);
      }

    }


    return arrAfter;
  }

}
