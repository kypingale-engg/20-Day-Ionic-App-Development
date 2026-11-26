# Day 08 – App State and Reusable Patterns

## Objective
To understand Angular Services, RxJS BehaviorSubject, Observables, and shared application state in Ionic Angular.

## Concepts Covered
- Angular Services
- Dependency Injection
- RxJS BehaviorSubject
- Observables
- Shared application state
- Updating data across components
- Adding and toggling tasks

## Implementation
Created a shared `AppState` service to manage:
- Logged-in username
- Task list
- Adding new tasks
- Marking tasks as completed
- Updating username
- Clearing tasks

## Technologies Used
- Ionic Framework
- Angular
- TypeScript
- RxJS
- HTML
- SCSS

## Build Verification
Command: `npx ng build`

Result: Successful

## Learning Outcome
Learned how to manage shared application data using Angular Services and RxJS BehaviorSubject without duplicating state.