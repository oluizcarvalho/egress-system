import { Component } from '@angular/core';
import { Tabs, TabsComponent } from '@shared/components/tabs/tabs.component';
import {
	AcademicInformationComponent,
	PersonalDataComponent,
	ProfessionalInformationComponent,
	PublicationsComponent,
	TestimonialsComponent,
} from '@features/coordinator/graduates/components';

export enum GraduateTabs {
	PersonalData = 0,
	AcademicInformation = 1,
	ProfessionalInformation = 2,
	Testimonies = 3,
	Publications = 4,
}

@Component({
	selector: 'app-graduate-details',
	standalone: true,
	imports: [
		TabsComponent,
		PersonalDataComponent,
		AcademicInformationComponent,
		ProfessionalInformationComponent,
		TestimonialsComponent,
		PublicationsComponent,
	],
	templateUrl: './graduate-details.component.html',
	styleUrl: './graduate-details.component.scss',
})
export class GraduateDetailsComponent {
	tabs: Tabs = [
		{ label: 'Informações Pessoais', id: GraduateTabs.PersonalData, active: true },
		{ label: 'Informações Acadêmicas', id: GraduateTabs.AcademicInformation },
		{ label: 'Informações Profissionais', id: GraduateTabs.ProfessionalInformation },
		{ label: 'Depoimentos', id: GraduateTabs.Testimonies },
		{ label: 'Publicações', id: GraduateTabs.Publications },
	];
	activeTab: GraduateTabs = GraduateTabs.PersonalData;
	protected readonly GraduateTabs = GraduateTabs;
}
