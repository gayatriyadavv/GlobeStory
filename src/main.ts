import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app';
import { HomepageComponent } from './app/homepage/homepage';
import { JournalComponent } from './app/journal/journal';
import { AnalyticsComponent } from './app/analytics/analytics';
import { BudgeterComponent } from './app/budgeter/budgeter';
import { provideHttpClient,withInterceptorsFromDi } from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import { provideAnimations } from '@angular/platform-browser/animations';

import { SignupComponent } from './app/auth/signup/signup';
import { LoginComponent } from './app/auth/login/login';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { importProvidersFrom } from '@angular/core';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'journal', component: JournalComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'budgeter', component: BudgeterComponent },
  
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()), // ✅ Enables HttpClient globally
    importProvidersFrom(FormsModule),// ✅ Enables ngModel, template-driven forms
    provideAnimations(),
    provideCharts(withDefaultRegisterables())
  ],
}).catch(err => console.error(err));
