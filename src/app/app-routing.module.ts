import { ErrorComponent } from './pages/error/error.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { HomeComponent } from './pages/home/home.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'sobre', component: SobreComponent, children: [
      { path: 'lecio', component: SobreComponent },
    ]
  },
  {
    path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module')
      .then(m => m.DashboardModule)
  },
  { path: '404', component: ErrorComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
