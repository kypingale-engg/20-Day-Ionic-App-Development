
import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [
    {
      id: 1,
      title: 'Learn Ionic Angular',
      completed: true
    },
    {
      id: 2,
      title: 'Understand Angular Services',
      completed: false
    },
    {
      id: 3,
      title: 'Practice TypeScript',
      completed: false
    }
  ];

  getTasks(): Task[] {
    return this.tasks;
  }

  filterTasks(status: 'all' | 'pending' | 'completed'): Task[] {

    if (status === 'pending') {
      return this.tasks.filter(task => !task.completed);
    }

    if (status === 'completed') {
      return this.tasks.filter(task => task.completed);
    }

    return this.tasks;
  }

  addTask(title: string): void {
    const newTask: Task = {
      id: Date.now(),
      title: title,
      completed: false
    };

    this.tasks.push(newTask);
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
