
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

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
  IonBadge,
  IonIcon,
  IonList,
  IonItem,
  IonLabel
} from '@ionic/angular';

import { addIcons } from 'ionicons';
import { addOutline } from 'ionicons/icons';

import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    RouterLink,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
    IonBadge,
    IonIcon,
    IonList,
    IonItem,
    IonLabel
  ]
})
export class HomePage {

  tasks: Task[] = [];

  currentFilter: 'all' | 'pending' | 'completed' = 'all';

  constructor(private taskService: TaskService) {
    addIcons({
      addOutline
    });

    this.applyFilter('all');
  }

  applyFilter(status: 'all' | 'pending' | 'completed'): void {
    this.currentFilter = status;
    this.tasks = this.taskService.filterTasks(status);
  }

  addTask(): void {
    const title = window.prompt('Enter your task name:');

    if (title && title.trim()) {
      this.taskService.addTask(title.trim());
      this.applyFilter(this.currentFilter);
    }
  }

  // 1. Before the page enters
  ionViewWillEnter(): void {
    this.applyFilter(this.currentFilter);
    console.log('Home page is about to enter');
  }

  // 2. After the page enters
  ionViewDidEnter(): void {
    console.log('Home page has entered');
  }

  // 3. Before the page leaves
  ionViewWillLeave(): void {
    console.log('Home page is about to leave');
  }

  // 4. After the page leaves
  ionViewDidLeave(): void {
    console.log('Home page has left');
  }

}
