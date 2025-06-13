import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], filterQuery: any): any[] {
    // console.log(items, 'filter', filterQuery)
    if (!filterQuery) return items;
    if (items != undefined) {
      let nitems = items.filter(item => {
        
        return item.value.toString().toLowerCase().includes(filterQuery.toString().toLowerCase())
        
      });
      return nitems;
      // console.log(nitems)
    }
  }  

}
