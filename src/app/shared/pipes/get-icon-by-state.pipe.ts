import { Pipe, PipeTransform } from '@angular/core';
import { getIconByState, StateType } from '../utils/get-icon-by-state';

@Pipe({
	name: 'getIconByState',
	standalone: true,
})
export class GetIconByStatePipe implements PipeTransform {
	transform(state: StateType): string {
		return getIconByState(state);
	}
}
