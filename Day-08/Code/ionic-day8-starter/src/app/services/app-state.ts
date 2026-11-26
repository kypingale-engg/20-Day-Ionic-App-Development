
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AppState {
  private userSubject = new BehaviorSubject<string>('Krushnai');

  private tasksSubject = new BehaviorSubject<Task[]>([
    { id: 1, title: 'Learn Angular Services', completed: true },
    { id: 2, title: 'Understand RxJS', completed: false },
    { id: 3, title: 'Practice Shared State', completed: false }
  ]);

  user$ = this.userSubject.asObservable();
  tasks$ = this.tasksSubject.asObservable();

  addTask(title: string): void {
    const currentTasks = this.tasksSubject.value;

    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false
    };

    this.tasksSubject.next([...currentTasks, newTask]);
  }

  toggleTask(id: number): void {
    const updatedTasks = this.tasksSubject.value.map(task =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    );

    this.tasksSubject.next(updatedTasks);
  }

  updateUser(name: string): void {
    this.userSubject.next(name);
  }

  clearTasks(): void {
    this.tasksSubject.next([]);
  }
}
