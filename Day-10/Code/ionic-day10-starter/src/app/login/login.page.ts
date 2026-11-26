
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import {
  IonContent,
  IonInput,
  IonButton,
  IonText
} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonInput,
    IonButton,
    IonText
  ]
})
export class LoginPage {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router) {}

  login(): void {
    this.errorMessage = '';

    const emailValue = this.email.trim();
    const passwordValue = this.password.trim();

    if (!emailValue || !passwordValue) {
      this.errorMessage = 'Please enter your email and password.';
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue)) {
      this.errorMessage = 'Please enter a valid email address.';
      return;
    }

    this.router.navigate(['/tasks']);
  }
}
