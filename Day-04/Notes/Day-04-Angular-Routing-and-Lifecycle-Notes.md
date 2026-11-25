# Day 4 – Angular Routing, Navigation & Ionic Lifecycle Hooks

## 1. Objective

The objective of Day 4 was to learn Angular routing, navigation between Ionic pages, route parameters, and Ionic Page Lifecycle Hooks.

## 2. Topics Covered

- Angular Router
- Page navigation
- Route configuration
- Route parameters
- Task Details page
- Settings page
- Ionic Page Lifecycle Hooks
- `ngOnInit()` vs Ionic lifecycle hooks

## 3. Angular Routing

Angular Routing allows us to navigate between different pages of an application without reloading the entire application.

For example, our Task Manager app contains:

- Home Page
- Task Details Page
- Settings Page

Angular Router handles navigation between these pages.

## 4. Route Configuration

Routes define which page should open for a particular URL.

We configured routes in:

`src/app/app.routes.ts`

Example:

```typescript
import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'task-details/:id',
    loadComponent: () =>
      import('./task-details/task-details.page').then(
        (m) => m.TaskDetailsPage
      ),
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./settings/settings.page').then(
        (m) => m.SettingsPage
      ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
```

### Important Properties

- `path`: Defines the URL path.
- `loadComponent`: Loads the required page component.
- `redirectTo`: Redirects one route to another.
- `pathMatch`: Specifies how Angular matches the URL.

## 5. Navigation Between Pages

We used `RouterLink` to navigate between pages.

Example:

```html
<ion-button routerLink="/settings">
  Settings
</ion-button>
```

When the user clicks the Settings button, the Settings page opens.

We also used:

```html
<ion-item
  [routerLink]="['/task-details', task.id]"
  button>
```

This opens the Task Details page for the selected task.

## 6. Route Parameters

Route parameters are used to pass information through the URL.

Example:

```text
/task-details/1
```

Here:

- `task-details` is the route path.
- `1` is the task ID.

We configured the route using:

```typescript
path: 'task-details/:id'
```

The `:id` represents a dynamic route parameter.

## 7. ActivatedRoute

`ActivatedRoute` is an Angular service used to access information about the currently activated route.

We used it in the Task Details page to retrieve the task ID.

```typescript
const id = Number(
  this.route.snapshot.paramMap.get('id')
);
```

Explanation:

- `paramMap` accesses the route parameters.
- `get('id')` retrieves the ID from the URL.
- `Number()` converts the string ID into a number.

## 8. Task Details Page

The Task Details page displays information about the selected task.

It displays:

- Task ID
- Task Name
- Task Status

We retrieve the selected task from the TaskService using its ID.

```typescript
this.task = this.taskService
  .getTasks()
  .find(task => task.id === id);
```

The `find()` method searches for a task with the matching ID.

If the task is not found, the application displays a Task Not Found message.

## 9. Settings Page

We created a Settings page containing:

- Notifications toggle
- Dark Mode toggle
- Application information
- Version information

We used Angular's `ngModel` for two-way data binding.

Example:

```html
<ion-toggle
  [(ngModel)]="notificationsEnabled">
</ion-toggle>
```

`ngModel` keeps the toggle value connected to the component variable.

Note: In our current project, these toggles are UI demonstrations. Notifications and Dark Mode are not connected to actual notification functionality or theme changes yet.

## 10. Ionic Page Lifecycle Hooks

Ionic Page Lifecycle Hooks are methods that execute at different stages of a routed page's navigation lifecycle.

### Four Important Lifecycle Hooks

| Hook | Description |
|---|---|
| `ionViewWillEnter()` | Called just before the page becomes visible |
| `ionViewDidEnter()` | Called after the page has entered and is visible |
| `ionViewWillLeave()` | Called just before the page leaves |
| `ionViewDidLeave()` | Called after the page has left |

### Example

```typescript
ionViewWillEnter(): void {
  console.log('Home page is about to enter');
}

ionViewDidEnter(): void {
  console.log('Home page has entered');
}

ionViewWillLeave(): void {
  console.log('Home page is about to leave');
}

ionViewDidLeave(): void {
  console.log('Home page has left');
}
```

## 11. Why Lifecycle Hooks Are Useful

Lifecycle hooks help developers perform actions during page navigation.

Examples:

- Refresh data when entering a page.
- Start an activity when a page becomes visible.
- Save changes before leaving a page.
- Stop timers or activities after leaving a page.

In our project, we used `ionViewWillEnter()` to refresh the task list whenever the Home page becomes active again.

## 12. Angular ngOnInit() vs Ionic Lifecycle Hooks

| `ngOnInit()` | Ionic Lifecycle Hooks |
|---|---|
| Angular lifecycle hook | Ionic page lifecycle hooks |
| Runs when component initializes | Run during page navigation lifecycle |
| Normally runs once per component instance | Can run again when revisiting a cached Ionic page |
| Used for initial setup | Used for page entering/leaving actions |

## 13. Practical Testing

We tested the application in the browser.

### Navigation Tested

- Home → Settings
- Settings → Home
- Home → Task Details
- Task Details → Home

### Lifecycle Hooks Tested

We opened Chrome Developer Tools and checked the Console.

Expected messages:

```text
Home page is about to enter
Home page has entered
Home page is about to leave
Home page has left
```

All four lifecycle hooks were successfully tested.

## 14. Outcome

At the end of Day 4, we successfully:

- Implemented Angular routing.
- Navigated between multiple Ionic pages.
- Used route parameters to identify tasks.
- Created a Task Details page.
- Created a Settings page.
- Implemented and tested all four Ionic Page Lifecycle Hooks.

## 15. Conclusion

Day 4 helped us understand how navigation works in Ionic Angular applications. We learned how to configure routes, navigate between pages, pass dynamic route parameters, retrieve information using ActivatedRoute, and use Ionic lifecycle hooks to respond to page navigation events.

