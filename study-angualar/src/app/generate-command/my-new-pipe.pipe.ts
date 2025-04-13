import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myNewPipe'
})
export class MyNewPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
