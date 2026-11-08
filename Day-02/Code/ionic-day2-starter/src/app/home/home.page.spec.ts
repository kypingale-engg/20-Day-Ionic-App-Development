
import { Component } from '@angular/core';

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
  IonIcon,
  IonList,
  IonItem,
  IonLabel,
  IonBadge
} from '@ionic/angular';

interface Task {
  title: string;
  description: string;
  status: 'Completed' | 'In Progress' | 'Pending';
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
    IonIcon,
    IonList,
    IonItem,
    IonLabel,
    IonBadge
  ]
})
export class HomePage {

  tasks: Task[] = [
    {
      title: 'Complete Ionic Day 2',
      description: 'Learn Ionic UI components',
      status: 'In Progress'
    },
    {
      title: 'Practice Java',
      description: 'Revise OOP concepts',
      status: 'Pending'
    },
    {
      title: 'Complete Assignment',
      description: 'Finish college work',
      status: 'Completed'
    },
    {
      title: 'Prepare for Placement',
      description: 'Practice aptitude questions',
      status: 'Pending'
    }
  ];

  addTask() {
    const title = window.prompt('Enter your task name:');

    if (title && title.trim()) {
      this.tasks.push({
        title: title.trim(),
        description: 'New task',
        status: 'Pending'
      });
    }
  }

}
