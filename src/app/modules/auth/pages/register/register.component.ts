import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AnimationsServiceService } from 'src/app/core/services/animations/animations-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations:[AnimationsServiceService.slideInFromBottom]
})
export class RegisterComponent implements OnInit {
  register: FormGroup = this.fb.group({
    name: ['', [Validators.minLength(3), Validators.maxLength(80), Validators.required]],
    lastName: ['', [Validators.minLength(3), Validators.maxLength(80)]],
    email: ['', [Validators.email, Validators.required]],
    gender: ['', [Validators.required]],
    birthDate: ['', [Validators.required]],
    password: ['', [ Validators.minLength(8),Validators.required]],
    confirmPassword: ['', [ Validators.minLength(8),Validators.required]],

  })

  constructor(
    // Animations Service 
    private animationService: AnimationsServiceService,
    // Register Form
    private fb: FormBuilder
  ){}

  postUser():void {
    return
  }

  ngOnInit(): void {
    
  }
}
