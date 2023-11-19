import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  // Redirect (Default)
  {
    path: "**",
    redirectTo: "home"
  },
  {
    path: "home",
    loadChildren: () => import("./modules/home/home.module").then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
