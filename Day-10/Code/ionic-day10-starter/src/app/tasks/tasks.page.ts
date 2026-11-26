
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonIcon,
  IonCard,
  IonCardContent,
  IonCheckbox,
  IonSpinner
} from '@ionic/angular';

import { AppState, Task } from '../services/app-state';
import { NetworkService } from '../services/network.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonIcon,
    IonCard,
    IonCardContent,
    IonCheckbox,
    IonSpinner
  ]
})
export class TasksPage implements OnInit, OnDestroy {
  tasks: Task[] = [];
  isOnline = true;
  isLoading = true;

  private tasksSubscription?: Subscription;
  private networkSubscription?: Subscription;

  constructor(
    private router: Router,
    public appState: AppState,
    private networkService: NetworkService
  ) {}

  ngOnInit(): void {
    this.tasksSubscription = this.appState.tasks$.subscribe(
      tasks => {
        this.tasks = tasks;
        this.isLoading = false;
      }
    );

    this.networkSubscription = this.networkService.online$.subscribe(
      online => {
        this.isOnline = online;
      }
    );
  }

  ngOnDestroy(): void {
    this.tasksSubscription?.unsubscribe();
    this.networkSubscription?.unsubscribe();
  }

  get completedCount(): number {
    return this.tasks.filter(task => task.completed).length;
  }

  openTask(task: Task): void {
    this.router.navigate(['/task-detail', task.id]);
  }

  toggleTask(id: number): void {
    this.appState.toggleTask(id);
  }

  addTask(): void {
    this.router.navigate(['/add-task']);
  }

  logout(): void {
    this.router.navigate(['/login']);
  }
}
