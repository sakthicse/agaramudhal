import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ApprovalsAndRegistrationComponent } from './approvals-and-registration/approvals-and-registration.component';
import { FoundingComponent } from './founding/founding.component';
import { TaxBenefitsComponent } from './tax-benefits/tax-benefits.component';
import { VisionAndMissionComponent } from './vision-and-mission/vision-and-mission.component';
import { ProjectOneComponent } from './project-one/project-one.component';
import { ProjectTwoComponent } from './project-two/project-two.component';
import { DonateComponent } from './donate/donate.component';
import { FaqComponent } from './faq/faq.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TrusteeDetailsComponent } from './trustee-details/trustee-details.component';
import { ProjectThreeComponent } from './project-three/project-three.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'about-us',
    children: [
      {
        path: '',
        redirectTo: 'approval-registration',
        pathMatch: 'full'
      },
      {
        path: 'approval-registration',
        component: ApprovalsAndRegistrationComponent,
        data: { title: 'Approval-Registration' }
      },
      {
        path: 'founding',
        component: FoundingComponent,
        data: { title: 'Founding' }
      },
      {
        path: 'trustee-details',
        component: TrusteeDetailsComponent,
        data: { title: 'Trustee Details' }
      },
      {
        path: 'tax-benefits',
        component: TaxBenefitsComponent,
        data: { title: 'Tax Benefits' }
      },
      {
        path: 'vision-mission',
        component: VisionAndMissionComponent,
        data: { title: 'Vision-Mission' }
      }
    ]
  },
  {
    path: 'projects',
    children: [
      {
        path: '',
        redirectTo: 'project-one',
        pathMatch: 'full'
      },
      {
        path: 'project-one',
        component: ProjectOneComponent,
        data: { title: 'Project-One' }
      },
      {
        path: 'project-two',
        component: ProjectTwoComponent,
        data: { title: 'Project-Two' }
      },
      {
        path: 'project-three',
        component: ProjectThreeComponent,
        data: { title: 'Project-Three' }
      },
    ]
  },
  {
    path: 'donate',
    component: DonateComponent,
    data: { title: 'Donate' }
  },
  {
    path: 'faq',
    component: FaqComponent,
    data: { title: 'FAQ' }
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
    data: { title: 'Contact-Us' }
  }
];

export const AgaramudhalRoutes = RouterModule.forChild(routes);
export const AgaramudhalComponents = [
  HomeComponent,
  ApprovalsAndRegistrationComponent,
  ProjectOneComponent,
  ProjectTwoComponent,
  ProjectThreeComponent,
  FoundingComponent,
  TrusteeDetailsComponent,
  TaxBenefitsComponent,
  VisionAndMissionComponent,
  DonateComponent,
  FaqComponent,
  ContactUsComponent
];
