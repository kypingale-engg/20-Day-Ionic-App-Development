
import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonSpinner
} from '@ionic/angular';

import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
    IonSpinner
  ],
})
export class HomePage implements OnInit {

  users: User[] = [];

  isLoading: boolean = false;

  errorMessage: string = '';

  constructor(
    private userService: UserService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.isLoading = true;
    this.errorMessage = '';

    this.userService.getUsers().subscribe({

      next: (data) => {
        this.users = data;
        this.isLoading = false;

        console.log('Users fetched successfully:', this.users);

        this.cdr.detectChanges();
      },

      error: (error) => {
        console.error('API Error:', error);

        this.errorMessage = 'Unable to load users. Please try again.';
        this.isLoading = false;

        this.cdr.detectChanges();
      }

    });
  }
}
