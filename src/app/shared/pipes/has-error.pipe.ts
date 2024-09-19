import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Pipe({
	name: 'hasError',
	standalone: true,
	pure: false,
})
export class HasErrorPipe implements PipeTransform {
	transform(value: AbstractControl, error?: string): boolean {
		if (error) {
			return value.invalid && value.hasError(error) && (value.dirty || value.touched);
		}
		return value.invalid && (value.dirty || value.touched);
	}
}
