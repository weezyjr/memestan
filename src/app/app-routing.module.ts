import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsGuard } from './guards/settings.guard';
import { AppSettingsComponent } from './components/app-settings/app-settings.component';

const routes: Routes = [
  {
    path: '',
    component: AppSettingsComponent,
    canActivate: [SettingsGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
