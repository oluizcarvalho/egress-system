import { Component } from '@angular/core';
import { Tabs, TabsComponent } from '@shared/components/tabs/tabs.component';
import { PersonalDataComponent } from '@app/features/coordinator/graduates/components/personal-data/personal-data.component';
import { AcademicInformationComponent } from '@app/features/coordinator/graduates/components/academic-information/academic-information.component';
import { ProfessionalInformationComponent } from '@app/features/coordinator/graduates/components/professional-information/professional-information.component';
import { TestimonialsComponent } from '@app/features/coordinator/graduates/components/testimonials/testimonials.component';

export enum GraduateTabs {
	PersonalData = 0,
	AcademicInformation = 1,
	ProfessionalInformation = 2,
	Testimonies = 3,
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
	];
	activeTab: GraduateTabs = GraduateTabs.PersonalData;
	GraduateTabs = GraduateTabs;
}
