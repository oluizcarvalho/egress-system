import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

@NgModule({
	imports: [CommonModule],
	providers: [
		{
			provide: LOCALE_ID,
			useValue: 'pt-BR',
		},
	],
})
export class CoreModule {}
