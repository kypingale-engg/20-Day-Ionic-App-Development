
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
  IonItem,
  IonLabel,
  IonCheckbox,
  IonList
} from '@ionic/angular';

import { AppState } from '../services/app-state';
import { NetworkService } from '../services/network.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonInput,
    IonButton,
    IonItem,
    IonLabel,
    IonCheckbox,
    IonList
  ]
})
export class HomePage {
  user$;
  tasks$;
  online$;

  newTask = '';
  userName = '';

  isSubmitting = false;
  errorMessage = '';
  showRetry = false;
  lastUpdated = new Date();

  constructor(
    private appState: AppState,
    private networkService: NetworkService
  ) {
    this.user$ = this.appState.user$;
    this.tasks$ = this.appState.tasks$;
    this.online$ = this.networkService.online$;
  }

  addTask(): void {
    const title = this.newTask.trim();

    if (!title || this.isSubmitting) {
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';

    try {
      this.appState.addTask(title);
      this.newTask = '';
      this.lastUpdated = new Date();
    } catch (error) {
      this.errorMessage = 'Unable to save task. Please try again.';
      this.showRetry = true;
    } finally {
      this.isSubmitting = false;
    }
  }

  retry(): void {
    this.showRetry = false;
    this.errorMessage = '';
  }

  toggleTask(id: number): void {
    this.appState.toggleTask(id);
    this.lastUpdated = new Date();
  }

  updateUser(): void {
    const name = this.userName.trim();

    if (name) {
      this.appState.updateUser(name);
      this.userName = '';
    }
  }
}
