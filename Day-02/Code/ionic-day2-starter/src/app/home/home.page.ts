
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
  IonBadge,
  IonIcon,
  IonList,
  IonItem,
  IonLabel
} from '@ionic/angular';

import { addIcons } from 'ionicons';

import {
  addOutline,
  checkmarkCircleOutline,
  timeOutline,
  calendarOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
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
    IonBadge,
    IonIcon,
    IonList,
    IonItem,
    IonLabel
  ],
})
export class HomePage {

  constructor() {
    addIcons({
      addOutline,
      checkmarkCircleOutline,
      timeOutline,
      calendarOutline
    });
  }

  tasks = [
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

  addTask(): void {
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
