import { Pipe, PipeTransform } from '@angular/core';
import { ReturnStatement } from '@angular/compiler';

@Pipe({
  name: 'filterCar'
})
export class FilterCarPipe implements PipeTransform {
  transform(carList: any[], manufactor?: string, model?: string, gear?: string, year?: string, searchbar?: string): Array<any> {
    let queryparams: Array<any> = [manufactor,model,gear,year,searchbar];

    //filter carList by ANY of searchBar Strings.

    if(queryparams.some(item=> item!="")){
      if(searchbar!=""){


        carList = carList.filter(item=>item.Production_Year.indexOf(searchbar) > -1 ||
         item.Gear.indexOf(searchbar) > -1 ||
         item.Model.indexOf(searchbar) > -1 ||
         item.Manufactor_Name.indexOf(searchbar)> -1);
      }
      else{
  
        var params = queryparams.filter(item=>item!="");

        params.forEach(filterItem=>  carList = carList.filter(item=>item.Production_Year.indexOf(filterItem) > -1 ||
         item.Gear.indexOf(filterItem) > -1 ||
         item.Model.indexOf(filterItem) > -1 ||
         item.Manufactor_Name.indexOf(filterItem)> -1))
      }
    }
    

    return carList;

  }



}

