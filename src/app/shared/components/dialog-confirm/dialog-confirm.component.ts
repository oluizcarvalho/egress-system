import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { ButtonDirective } from '@shared/directives/button.directive';

export interface DialogConfirmInputs {
	message?: string;
	icon?: string;
	buttonConfirmLabel?: string;
	buttonConfirmShow?: boolean;
	buttonCancelLabel?: string;
	buttonCancelShow?: boolean;
}

@Component({
	selector: 'app-dialog-confirm',
	standalone: true,
	imports: [ButtonDirective],
	templateUrl: './dialog-confirm.component.html',
	styleUrl: './dialog-confirm.component.scss',
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogConfirmComponent {
	dialogRef = inject<DialogRef<boolean>>(DialogRef<boolean>);
	data: DialogConfirmInputs = inject(DIALOG_DATA);

	constructor() {
		this.data = {
			message: this.data.message || 'Tem certeza que deseja continuar?',
			icon: this.data.icon || 'fa-exclamation-triangle',
			buttonConfirmLabel: this.data.buttonConfirmLabel || 'Confirmar',
			buttonConfirmShow: this.data.buttonConfirmShow || true,
			buttonCancelLabel: this.data.buttonCancelLabel || 'Cancelar',
			buttonCancelShow: this.data.buttonCancelShow || true,
		};
	}

	onCancel() {
		this.dialogRef.close(false);
	}

	onConfirm() {
		this.dialogRef.close(true);
	}
}
