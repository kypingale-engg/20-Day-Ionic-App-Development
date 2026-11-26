
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonCard,
  IonCardContent,
  IonText
} from '@ionic/angular';

import { AppState, Task } from '../services/app-state';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.page.html',
  styleUrls: ['./task-detail.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonCard,
    IonCardContent,
    IonText
  ]
})
export class TaskDetailPage {

  task: Task | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appState: AppState
  ) {
    const taskId = Number(this.route.snapshot.paramMap.get('id'));

    this.task = this.appState.getTask(taskId);
  }

  goBack(): void {
    this.router.navigate(['/tasks']);
  }
}
