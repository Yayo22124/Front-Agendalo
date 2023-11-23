import { RouterModule, Routes } from '@angular/router';

import { CreateServiceComponent } from './pages/create-service/create-service.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  // Default
  {
    path: "",
    component: CreateServiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
