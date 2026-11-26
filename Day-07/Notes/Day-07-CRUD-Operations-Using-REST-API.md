# Day 7 - CRUD Operations Using REST API

## 1. Objective

The objective of Day 7 is to understand and implement CRUD operations using REST APIs in an Ionic Angular application.

A User Management application was developed using Ionic Framework, Angular, TypeScript and HttpClient.

The application allows users to be created, viewed, updated and deleted through API requests.

## 2. Technologies Used

- Ionic Framework
- Angular
- TypeScript
- RxJS
- Angular HttpClient
- Capacitor
- Node.js
- npm
- HTML
- SCSS

## 3. What is CRUD?

CRUD stands for:

- Create
- Read
- Update
- Delete

These are the four basic operations used to manage data in an application.

| Operation | HTTP Method | Purpose |
|---|---|---|
| Create | POST | Add new data |
| Read | GET | Retrieve data |
| Update | PUT | Update existing data |
| Delete | DELETE | Remove data |

In this project, all four operations were implemented using the JSONPlaceholder REST API.

## 4. What is a REST API?

REST stands for Representational State Transfer.

A REST API allows applications to communicate with a server using HTTP methods.

In our project, the Ionic application sends HTTP requests to an external API and receives responses.

API endpoint:

https://jsonplaceholder.typicode.com/users

## 5. Configuring HttpClient

Angular HttpClient is used to send HTTP requests to REST APIs.

In a standalone Angular application, HttpClient is configured using provideHttpClient().

Import:

    import { provideHttpClient } from '@angular/common/http';

Add it to the application providers:

    provideHttpClient(),

This makes HttpClient available throughout the application through dependency injection.

## 6. Creating a User Interface

A TypeScript interface defines the structure of user information.

File:

    src/app/models/user.model.ts

Code:

    export interface User {
      id: number;
      name: string;
      email: string;
      phone?: string;
      username?: string;
      website?: string;

      company?: {
        name: string;
      };
    }

Important concepts:

- `id` identifies a user.
- `name` stores the user's name.
- `email` stores the email address.
- `phone` stores the phone number.
- `username` stores the username.
- `website` stores the website address.
- `?` indicates an optional property.

## 7. Creating an Angular Service

An Angular service contains reusable application logic.

File:

    src/app/services/user.service.ts

We created UserService to handle API communication.

The service uses:

- Injectable
- HttpClient
- Observable
- User interface

The service provides four methods:

1. getUsers()
2. addUser()
3. updateUser()
4. deleteUser()

## 8. Understanding GET - Read Operation

GET is used to retrieve data from a server.

Service method:

    getUsers(): Observable<User[]> {
      return this.http.get<User[]>(this.apiUrl);
    }

Explanation:

- `getUsers()` retrieves user data.
- `http.get()` sends an HTTP GET request.
- `User[]` represents an array of users.
- `Observable<User[]>` represents the asynchronous response.

In the Home Page:

    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (error) => {
        console.error(error);
      }
    });

The API returns user information, which is stored in the users array and displayed using Ionic cards.

## 9. Understanding POST - Create Operation

POST is used to send new data to a server.

Service method:

    addUser(user: Omit<User, 'id'>): Observable<User> {
      return this.http.post<User>(this.apiUrl, user);
    }

Explanation:

- `addUser()` sends new user information.
- `http.post()` sends an HTTP POST request.
- The user details are sent in the request body.
- `Omit<User, 'id'>` means the new user input does not need an ID.

The API response is received using subscribe().

After a successful response, the new user is added to the local users array.

## 10. Understanding Omit in TypeScript

Omit is a TypeScript utility type.

Example:

    Omit<User, 'id'>

It creates a type based on the User interface but excludes the id property.

This is useful when adding a new user because the application does not need to provide an existing user ID.

## 11. Understanding PUT - Update Operation

PUT is used to update an existing resource.

Service method:

    updateUser(user: User): Observable<User> {
      return this.http.put<User>(
        `${this.apiUrl}/${user.id}`,
        user
      );
    }

Explanation:

- `updateUser()` receives the selected user.
- The user ID identifies the resource.
- `http.put()` sends the updated information.
- The API returns a response.

When the update succeeds, the corresponding user in the local users array is replaced with the updated user.

The application also provides an Edit button that loads the selected user's details into the form.

## 12. Understanding DELETE - Delete Operation

DELETE is used to request the removal of a resource.

Service method:

    deleteUser(id: number): Observable<void> {
      return this.http.delete<void>(
        `${this.apiUrl}/${id}`
      );
    }

Explanation:

- `deleteUser()` receives the user ID.
- The ID is added to the API endpoint.
- `http.delete()` sends an HTTP DELETE request.

After a successful response, the user is removed from the local users array using filter().

Example:

    this.users = this.users.filter(
      user => user.id !== id
    );

The filter() method creates a new array without the deleted user.

## 13. What is an Observable?

An Observable represents a stream of data that can arrive asynchronously.

Angular HttpClient returns Observables for HTTP requests.

To receive the response, we use subscribe().

Example:

    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (error) => {
        console.error(error);
      }
    });

Important callbacks:

- `next`: Executes when the request succeeds.
- `error`: Executes when the request fails.
- `complete`: Executes when the Observable completes, if provided.

## 14. Understanding subscribe()

subscribe() is used to receive values and errors from an Observable.

Example:

    this.userService.addUser(userData).subscribe({
      next: (response) => {
        console.log('User added:', response);
      },
      error: (error) => {
        console.error('Add user error:', error);
      }
    });

In our application, subscribe() is used for GET, POST, PUT and DELETE operations.

## 15. Understanding FormsModule and ngModel

FormsModule is used to work with template-driven forms in Angular.

Import:

    import { FormsModule } from '@angular/forms';

It is added to the standalone component's imports.

ngModel connects an HTML input field with a TypeScript property.

Example:

    [(ngModel)]="userForm.name"

This allows the application to read and update the name entered by the user.

The `name` attribute is also provided for each form control.

## 16. Understanding Two-Way Data Binding

Two-way data binding allows data to flow between the component and the template.

Example:

    [(ngModel)]="userForm.email"

When a user enters an email address, the TypeScript property is updated.

When the TypeScript property changes, the input field displays the updated value.

## 17. Understanding Editing State

We used the following property:

    editingUserId: number | null = null;

Purpose:

- `null` means the user is adding a new record.
- A number means the user is editing an existing record.

This allows the saveUser() method to decide whether to send a POST or PUT request.

## 18. Understanding Array Methods

### map()

The map() method creates a new array by transforming each element.

In our project, it is used to replace an updated user.

    this.users = this.users.map(user =>
      user.id === savedUser.id ? savedUser : user
    );

### filter()

The filter() method creates a new array containing only elements that satisfy a condition.

In our project, it is used to remove a deleted user.

    this.users = this.users.filter(
      user => user.id !== id
    );

### Spread Operator

The spread operator `...` is used to copy or combine object properties and array elements.

Example:

    const newUser: User = {
      ...userData,
      ...response
    };

It combines the submitted user data with the API response.

## 19. Understanding Loading and Saving States

We used Boolean properties to track application operations.

Example:

    isLoading = false;
    isSaving = false;

The loading state is used while fetching users.

The saving state is used while creating or updating a user.

These properties help provide feedback to users and prevent duplicate form submissions while saving.

## 20. Error and Success Handling

The application contains two message properties:

    errorMessage = '';
    successMessage = '';

Success messages are displayed after successful operations.

Examples:

- User added successfully!
- User updated successfully!
- User deleted successfully!

Error messages are displayed when API requests fail.

Example:

    error: (error) => {
      console.error('Update user error:', error);

      this.errorMessage = 'Unable to update user.';
      this.isSaving = false;
    }

## 21. Understanding ChangeDetectorRef

ChangeDetectorRef is an Angular utility used to control change detection.

Import:

    import { ChangeDetectorRef } from '@angular/core';

Dependency injection:

    constructor(
      private userService: UserService,
      private cdr: ChangeDetectorRef
    ) {}

Explicit view update:

    this.cdr.detectChanges();

In this project, detectChanges() was called after API responses and local state changes to request a component view update.

## 22. Understanding Ionic UI Components

The following Ionic components were used:

| Component | Purpose |
|---|---|
| ion-header | Creates the page header |
| ion-toolbar | Displays the toolbar |
| ion-title | Displays the page title |
| ion-content | Main page content |
| ion-card | Displays user information |
| ion-card-header | Displays card heading |
| ion-card-title | Displays user name |
| ion-card-content | Displays user details |
| ion-input | Accepts user input |
| ion-item | Groups form fields |
| ion-button | Provides user actions |
| ion-spinner | Displays loading animation |

## 23. Application Workflow

1. The Ionic application starts.
2. HomePage initializes using ngOnInit().
3. loadUsers() calls the UserService.
4. UserService sends a GET request.
5. The API returns user information.
6. User information is stored in the users array.
7. Ionic cards display the users.
8. The user can enter details in the form.
9. saveUser() sends either a POST or PUT request.
10. editUser() loads selected user details into the form.
11. deleteUser() sends a DELETE request.
12. The local user list is updated after successful write responses.

## 24. Testing Performed

### GET Testing

- Fetched the original users from JSONPlaceholder.
- Confirmed that 10 users were received.
- Displayed users in Ionic cards.

Result: Successful.

### POST Testing

- Added a new user using the form.
- Received a simulated user response with ID 11.
- Displayed the new user in the local application list.

Result: Successful.

### PUT Testing

- Initially attempted to update the newly added user with ID 11.
- Received a 404 response because JSONPlaceholder does not permanently store simulated POST records.
- Retested using an original server user, such as ID 2.
- Successfully updated the original user's information.

Result: Successful for an original server user.

### DELETE Testing

- Deleted an original user using the Delete button.
- Received a successful simulated response.
- Removed the user from the local displayed list.

Result: Successful.

### Production Build Testing

Command:

    ionic build

Result:

    Application bundle generation complete.

The production build completed successfully.

Two non-fatal warnings were observed:

1. Browserslist contained older browser versions outside Angular's supported range.
2. The Home Page SCSS file exceeded the configured 2 kB warning budget by 428 bytes.

Neither warning prevented the production build.

## 25. Important JSONPlaceholder Limitation

JSONPlaceholder is a public testing API.

POST, PUT and DELETE operations simulate successful responses but do not permanently save changes on the server.

This explains why:

- A newly added user may receive ID 11.
- Updating that simulated user can return a 404 response.
- A successful DELETE does not permanently remove the record from the server.
-