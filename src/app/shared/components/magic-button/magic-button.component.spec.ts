import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MagicButtonComponent } from './magic-button.component';

describe('MagicButtonComponent', () => {
	let spectator: Spectator<MagicButtonComponent>;
	const createComponent = createComponentFactory(MagicButtonComponent);

	beforeEach(() => {
		spectator = createComponent();
	});

	it('should create the component', () => {
		expect(spectator.component).toBeTruthy();
	});

	it('should have default values', () => {
		expect(spectator.component.icon).toBe('');
		expect(spectator.component.fontSet).toBe('fas');
		expect(spectator.component.size).toBe('medium');
		expect(spectator.component.label).toBe('');
	});

	it('should set icon correctly', () => {
		spectator.component.icon = 'fa-magic';
		expect(spectator.component.icon).toBe('fa-magic');
	});

	it('should set fontSet correctly', () => {
		spectator.component.fontSet = 'fab';
		expect(spectator.component.fontSet).toBe('fab');
	});

	it('should set size correctly', () => {
		spectator.component.size = 'large';
		expect(spectator.component.size).toBe('large');
	});

	it('should set label correctly', () => {
		spectator.component.label = 'Click Here';
		expect(spectator.component.label).toBe('Click Here');
	});

	it('should handle empty label', () => {
		spectator.component.label = '';
		expect(spectator.component.label).toBe('');
	});

	it('should handle undefined size', () => {
		spectator.component.size = undefined;
		expect(spectator.component.size).toBeUndefined();
	});
});
