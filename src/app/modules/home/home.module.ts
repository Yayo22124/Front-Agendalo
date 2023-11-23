import { CommonModule } from '@angular/common';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavBarComponent,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    FooterComponent,
  ],
})
export class HomeModule {
  constructor() {}

  ngOnInit(): void {}
}
