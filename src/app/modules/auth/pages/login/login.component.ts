import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AnimationsServiceService } from 'src/app/core/services/animations/animations-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [AnimationsServiceService.slideInFromRight],
})
export class LoginComponent implements OnInit {
  // Login Form Group
  login: FormGroup = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(
    // Animations Service
    private animationsService: AnimationsServiceService,
    // ReactiveForms
    private fb: FormBuilder
  ) {}

  // Response to submit form
  postCredentials(): void {
    return
  }

  ngOnInit(): void {}
}
