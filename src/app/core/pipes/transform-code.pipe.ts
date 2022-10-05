import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformCode',
})
export class TransformCodePipe implements PipeTransform {
  transform(code: string): string {
    return code.replace('/', ' - ');
  }
}
