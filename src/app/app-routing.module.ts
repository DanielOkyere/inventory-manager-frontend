import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupFormComponent } from './component/signup-form/signup-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {'path':'home',component: SignupFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
