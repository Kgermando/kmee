import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LegislationComponent } from './pages/legislation/legislation.component';
import { OrganisationComponent } from './pages/organisation/organisation.component';
import { OffresEmploiComponent } from './pages/offres-emploi/offres-emploi.component';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { ResetPassword } from './auth/reset-password/reset-password';
import { ForgotPassword } from './auth/forgot-password/forgot-password';
import { VenteLocationComponent } from './pages/vente-location/vente-location.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'legislation',
    component: LegislationComponent
  },
  {
    path: 'organisation',
    component: OrganisationComponent
  },
  {
    path: 'offres-emploi',
    component: OffresEmploiComponent
  },
  {
    path: 'ventes-locations',
    component: VenteLocationComponent,
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: Login
      },
      {
        path: 'register',
        component: Register
      },
      {
        path: 'reset-password',
        component: ResetPassword
      },
      {
        path: 'forgot-password',
        component: ForgotPassword
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
