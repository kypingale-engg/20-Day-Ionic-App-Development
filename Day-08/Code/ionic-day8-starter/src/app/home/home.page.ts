
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

  newTask = '';
  userName = '';

  constructor(private appState: AppState) {
    this.user$ = this.appState.user$;
    this.tasks$ = this.appState.tasks$;
  }

  addTask(): void {
    const title = this.newTask.trim();

    if (title) {
      this.appState.addTask(title);
      this.newTask = '';
    }
  }

  toggleTask(id: number): void {
    this.appState.toggleTask(id);
  }

  updateUser(): void {
    const name = this.userName.trim();

    if (name) {
      this.appState.updateUser(name);
      this.userName = '';
    }
  }
}
