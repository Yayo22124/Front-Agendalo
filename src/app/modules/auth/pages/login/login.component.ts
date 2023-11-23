import { Component, OnInit } from '@angular/core';

import { AnimationsServiceService } from 'src/app/core/services/animations/animations-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [AnimationsServiceService.slideInFromRight],
})
export class LoginComponent implements OnInit {
  constructor(private animationsService: AnimationsServiceService) {}

  ngOnInit(): void {}
}
