import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  // Redirect (Default)
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./modules/services/services.module').then(
        (m) => m.ServicesModule
      ),
  },
  {
    path: 'auth',
    children: [{
      path: "",
      loadChildren: () => import("./modules/auth/auth.module").then(m => m.AuthModule)
    }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
