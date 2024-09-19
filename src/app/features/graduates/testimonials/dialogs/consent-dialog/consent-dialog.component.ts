import { Component, inject } from '@angular/core';
import { CheckboxComponent } from '@shared/components/checkbox/checkbox.component';
import { ButtonDirective } from '@shared/directives/button.directive';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
	selector: 'app-consent-dialog',
	standalone: true,
	imports: [CheckboxComponent, ButtonDirective],
	templateUrl: './consent-dialog.component.html',
	styleUrl: './consent-dialog.component.scss',
})
export class ConsentDialogComponent {
	consent = false;

	private _dialogRef = inject<DialogRef<boolean>>(DialogRef<boolean>);

	onCancel() {
		this._dialogRef.close(false);
	}

	onConfirm() {
		if (!this.consent) return;

		this._dialogRef.close(true);
	}
}
