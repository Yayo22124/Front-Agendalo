import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  // Default
  {
    path: "**",
    redirectTo: "home-page"
  },
  {
    path: "home-page",
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
