
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const DEFAULT_TASKS: Task[] = [
  { id: 1, title: 'Learn Angular Services', completed: true },
  { id: 2, title: 'Understand RxJS', completed: false },
  { id: 3, title: 'Practice Shared State', completed: false }
];

@Injectable({
  providedIn: 'root'
})
export class AppState {
  private readonly storageKey = 'ionic-day9-tasks';

  private loadedFromCache = false;

  private tasksSubject = new BehaviorSubject<Task[]>(
    this.loadTasks()
  );

  userSubject = new BehaviorSubject<string>('Krushnai');

  user$ = this.userSubject.asObservable();
  tasks$ = this.tasksSubject.asObservable();

  get hasLoadedCache(): boolean {
    return this.loadedFromCache;
  }

  private loadTasks(): Task[] {
    try {
      const savedData = localStorage.getItem(this.storageKey);

      if (savedData) {
        const parsedData = JSON.parse(savedData);

        if (Array.isArray(parsedData)) {
          this.loadedFromCache = true;
          return parsedData;
        }
      }
    } catch (error) {
      console.error('Unable to load cached tasks:', error);
    }

    return DEFAULT_TASKS;
  }

  private saveTasks(tasks: Task[]): void {
    try {
      localStorage.setItem(
        this.storageKey,
        JSON.stringify(tasks)
      );
    } catch (error) {
      console.error('Unable to save tasks:', error);
    }
  }

  addTask(title: string): void {
    const currentTasks = this.tasksSubject.value;

    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false
    };

    const updatedTasks = [...currentTasks, newTask];

    this.tasksSubject.next(updatedTasks);
    this.saveTasks(updatedTasks);
  }

  toggleTask(id: number): void {
    const updatedTasks = this.tasksSubject.value.map(task =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    );

    this.tasksSubject.next(updatedTasks);
    this.saveTasks(updatedTasks);
  }

  updateUser(name: string): void {
    this.userSubject.next(name);
  }

  clearTasks(): void {
    this.tasksSubject.next([]);
    this.saveTasks([]);
  }
}
