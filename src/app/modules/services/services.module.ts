import { CommonModule } from '@angular/common';
import { CreateServiceComponent } from './pages/create-service/create-service.component';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { ServicesRoutingModule } from './services-routing.module';

@NgModule({
  declarations: [
    CreateServiceComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    NavBarComponent
  ]
})
export class ServicesModule { }
