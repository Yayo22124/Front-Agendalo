import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { APIService } from '../../../../core/services/AgendaloAPI/api.service';
import { AnimationsServiceService } from 'src/app/core/services/animations/animations-service.service';
import { MessageDialogService } from 'src/app/core/services/message-dialog/message-dialog.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [AnimationsServiceService.slideInFromBottom],
})
export class RegisterComponent implements OnInit {
  // Loader variable
  loading: boolean = false;

  //* -------- Register Form ----------
  register: FormGroup = this.fb.group({
    name: [
      '',
      [Validators.minLength(3), Validators.maxLength(80), Validators.required],
    ],
    lastName: ['', [Validators.minLength(3), Validators.maxLength(80)]],
    email: ['', [Validators.email, Validators.required]],
    title: [
      '',
      [Validators.maxLength(10), Validators.minLength(3)],
    ],
    gender: ['', [Validators.required]],
    birthDate: ['', [Validators.required]],
    password: ['', [Validators.minLength(8), Validators.required]],
    confirmPassword: ['', [Validators.minLength(8), Validators.required]],
  });

  constructor(
    //! API Service
    private apiService: APIService,
    //! Message Dialog Service
    private messageDialogService: MessageDialogService,
    //! Animations Service
    private animationService: AnimationsServiceService,
    //! Register Form
    private fb: FormBuilder
  ) {}

  onSubmit() {
    if (this.register.valid) {
      this.loading = true;
      const formData = this.register.value;

      this.apiService.postData(formData).subscribe(
        (response) => {
          console.log('Petición POST exitosa:', response);
          this.messageDialogService.openSuccessDialog('Registro exitoso');
        },
        (error) => {
          console.error('Error en la petición POST:', error);
          this.messageDialogService.openErrorDialog(
            'Error al registrar, intenta de nuevo más tarde,'
          );
        },
        () => {
          this.loading = false;
        }
      );
    } else {
      console.log('El formulario no es válido. Corrige los campos.');
    }
  }
  ngOnInit(): void {}
}
