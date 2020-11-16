import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userManage'
})
export class UserManagePipe implements PipeTransform {

  transform(value: Array<any>, args?:number): Array<any> {

    let arrAfter: Array<any>=[];

    for (let i = 0; i < value.length; i++) {

      if (value[i].User_ID==args)
      {
        arrAfter.push(value[i]);
      }

    }


    return arrAfter;
  }

}
