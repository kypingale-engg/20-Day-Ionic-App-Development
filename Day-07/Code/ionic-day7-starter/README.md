# Ionic Day 7 - CRUD Operations Using REST API

## Project Overview

This project is developed as part of the 20-Day Ionic App Development Training Program.

The application demonstrates CRUD (Create, Read, Update and Delete) operations using Ionic Framework, Angular, TypeScript and REST API integration.

A User Management application was developed using the JSONPlaceholder public API.

Users can be displayed, added, edited and deleted through the application interface.

## Technologies Used

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

## API Used

JSONPlaceholder Users API:

https://jsonplaceholder.typicode.com/users

The application uses the following HTTP methods:

| HTTP Method | Operation | Purpose |
|---|---|---|
| GET | Read | Fetch users |
| POST | Create | Add a new user |
| PUT | Update | Edit an existing user |
| DELETE | Delete | Remove a user |

## Features Implemented

- Configured Angular HttpClient using provideHttpClient()
- Created a TypeScript User interface
- Created UserService for API communication
- Implemented GET request to fetch users
- Implemented POST request to add users
- Implemented PUT request to update users
- Implemented DELETE request to remove users
- Integrated CRUD operations into the Home Page
- Created an Add User form
- Implemented Edit and Delete buttons
- Added form validation for name and email
- Added loading and saving states
- Added success and error messages
- Added form reset and cancel functionality
- Added manual refresh functionality
- Implemented local user-list updates after successful API operations
- Added responsive SCSS styling
- Used ChangeDetectorRef for explicit view updates

## Project Structure

```text
ionic-day7-starter/
├── src/
│   ├── app/
│   │   ├── home/
│   │   │   ├── home.page.html
│   │   │   ├── home.page.scss
│   │   │   └── home.page.ts
│   │   ├── models/
│   │   │   └── user.model.ts
│   │   ├── services/
│   │   │   └── user.service.ts
│   │   ├── app.component.ts
│   │   └── app.routes.ts
│   ├── assets/
│   ├── global.scss
│   ├── index.html
│   └── main.ts
├── package.json
├── package-lock.json
├── angular.json
├── capacitor.config.ts
└── README.md
```

## CRUD Operations Explained

### 1. Create - POST

The POST method is used to add a new user.

The application sends user information to the API and displays the returned user in the local user list.

### 2. Read - GET

The GET method retrieves user information from the API.

The application displays the fetched users using Ionic cards.

### 3. Update - PUT

The PUT method updates an existing user's information.

The Edit button loads the selected user's information into the form. After submission, the updated information is displayed in the local user list.

### 4. Delete - DELETE

The DELETE method sends a request to remove a selected user.

After a successful response, the corresponding user is removed from the local user list.

## Important API Behavior

JSONPlaceholder is a public testing API.

Its POST, PUT and DELETE operations return simulated responses but do not permanently save changes on the server.

The application updates its local user list after successful write responses. Refreshing the application fetches the original server data again.

## How to Run the Project

### 1. Install Dependencies

```bash
npm install
```

### 2. Start the Development Server

```bash
ionic serve
```

### 3. Open the Application

Open the local URL displayed in the terminal.

Usually:

http://localhost:8100

## Production Build

To build the application:

```bash
ionic build
```

The production build generates its output in the www directory.

## Testing Results

The following operations were manually tested:

| Operation | Result |
|---|---|
| Fetch users (GET) | Successful |
| Add user (POST) | Successful |
| Update user (PUT) | Successful for an original server user |
| Delete user (DELETE) | Successful |

The production build also completed successfully.

## Learning Outcomes

After completing Day 7, the following concepts were practiced:

- Understanding CRUD operations
- Working with REST APIs
- Using HTTP GET, POST, PUT and DELETE methods
- Creating Angular services
- Using TypeScript interfaces
- Understanding Observables and subscriptions
- Working with Angular dependency injection
- Using FormsModule and ngModel
- Implementing form validation
- Updating local application state
- Handling API responses and errors
- Using ChangeDetectorRef
- Designing responsive Ionic interfaces
- Testing CRUD functionality
- Generating a production build

## Day 7 Conclusion

Day 7 focused on implementing CRUD operations using REST API integration in an Ionic Angular application.

A User Management application was successfully developed with functionality to create, read, update and delete users.

The application uses JSONPlaceholder to practice API communication and demonstrates how Angular and Ionic can be used to build interactive applications.

**Training Status: Day 7 Completed**