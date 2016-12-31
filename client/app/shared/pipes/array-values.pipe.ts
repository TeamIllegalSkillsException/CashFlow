import {PipeTransform, Pipe} from "@angular/core";

@Pipe({
  name: 'arrayFormatter'
})

export class ArrayFormatterPipe implements PipeTransform {
  transform(value: any, args?: any[]): any[] {
    let keyArr: any[] = Object.keys(value),
      dataArr = [];

    keyArr.forEach((key: any) => {
      dataArr.push(value[key]);
    });

    return dataArr;
  }
}
