import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderStatus'
})
export class OrderStatusPipe implements PipeTransform {

  transform(value: Array<any>, args?:number): Array<any> {

    let arrAfter: Array<any>=[];

    for (let i = 0; i < value.length; i++) {

      if (value[i].Order_Status==args)
      {
        arrAfter.push(value[i]);
      }

    }


    return arrAfter;
  }
}
