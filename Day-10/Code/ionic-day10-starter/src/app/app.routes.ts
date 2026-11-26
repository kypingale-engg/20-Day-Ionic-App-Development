
import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'tasks',
    loadComponent: () =>
      import('./tasks/tasks.page').then((m) => m.TasksPage),
  },
  {
    path: 'task-detail/:id',
    loadComponent: () =>
      import('./task-detail/task-detail.page').then((m) => m.TaskDetailPage),
  },
  {
    path: 'add-task',
    loadComponent: () =>
      import('./add-task/add-task.page').then((m) => m.AddTaskPage),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
