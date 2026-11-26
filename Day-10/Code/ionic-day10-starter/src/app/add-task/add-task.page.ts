
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonInput,
  IonTextarea,
  IonText
} from '@ionic/angular';

import { AppState } from '../services/app-state';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonInput,
    IonTextarea,
    IonText
  ]
})
export class AddTaskPage {

  title = '';
  description = '';
  errorMessage = '';

  constructor(
    private router: Router,
    private appState: AppState
  ) {}

  saveTask(): void {
    this.errorMessage = '';

    const taskTitle = this.title.trim();
    const taskDescription = this.description.trim();

    if (!taskTitle) {
      this.errorMessage = 'Please enter a task title.';
      return;
    }

    if (!taskDescription) {
      this.errorMessage = 'Please enter a task description.';
      return;
    }

    this.appState.addTask(taskTitle, taskDescription);

    this.router.navigate(['/tasks']);
  }

  goBack(): void {
    this.router.navigate(['/tasks']);
  }
}
