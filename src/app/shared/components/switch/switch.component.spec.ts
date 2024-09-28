import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { SwitchComponent } from './switch.component';

describe('SwitchComponent', () => {
	let spectator: Spectator<SwitchComponent>;
	const createComponent = createComponentFactory(SwitchComponent);

	beforeEach(() => {
		spectator = createComponent();
	});

	it('should create the component', () => {
		expect(spectator.component).toBeTruthy();
	});

	it('should have default values', () => {
		expect(spectator.component.label).toBe('');
		expect(spectator.component.id).toBe('');
		expect(spectator.component.hintActive).toBe('');
		expect(spectator.component.hintInactive).toBe('');
		expect(spectator.component.size).toBe('medium');
		expect(spectator.component.icon).toBe(false);
		expect(spectator.component.disabled).toBe(false);
		expect(spectator.component.checked).toBe(false);
		expect(spectator.component.position).toBe('left');
	});

	it('should toggle the value when toggle method is called', () => {
		spectator.component.value = false;
		spectator.component.toggle();
		expect(spectator.component.value).toBe(true);
		spectator.component.toggle();
		expect(spectator.component.value).toBe(false);
	});

	it('should emit valueChange event when value is changed', () => {
		jest.spyOn(spectator.component.valueChange, 'emit');
		spectator.component.value = true;
		expect(spectator.component.valueChange.emit).toHaveBeenCalledWith(true);
	});

	it('should not change value if disabled', () => {
		spectator.component.disabled = true;
		spectator.component.value = false;
		spectator.component.toggle();
		expect(spectator.component.value).toBe(false);
	});
});
