import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BillingComponent } from './billing/billing.component';
import { TablesComponent } from './tables/tables.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './profile/profile.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },  // Route to Dashboard
  { path: 'billing', component: BillingComponent },      // Route to Billing
  { path: 'tables', component: TablesComponent },        // Route to Tables
  {path:'profile',component:ProfileComponent},
  {path:'sign-in',component:SignInComponent},
  {path:'sign-up',component:SignUpComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Default route to Dashboard
  { path: '**', redirectTo: '/dashboard' } // Fallback route to Dashboard for undefined paths
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    BillingComponent,
    TablesComponent,
    ProfileComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatIconModule, BrowserAnimationsModule,
    MatSlideToggleModule,
    
    RouterModule.forRoot(routes),
    BrowserAnimationsModule // Configure RouterModule with routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
