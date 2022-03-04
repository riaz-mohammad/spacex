import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'description'
})
export class DescriptionPipe implements PipeTransform {

  transform(value: string): string[] {
    console.log(value.split(' '));
    return value.split(' ');
  }

}
