import { Component, OnInit } from '@angular/core';

import { AnimationsServiceService } from 'src/app/core/services/animations/animations-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations:[AnimationsServiceService.slideInFromBottom]
})
export class RegisterComponent implements OnInit {
  constructor(private animationService: AnimationsServiceService){}

  ngOnInit(): void {
    
  }
}
