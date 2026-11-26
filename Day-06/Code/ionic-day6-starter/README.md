
# Ionic Day 6 - HTTP and REST API Integration

## Project Overview

This project is developed as part of the 20-Day Ionic App Development Training Program.

The application demonstrates how to integrate a REST API into an Ionic application using Angular HttpClient.

It fetches user information from the JSONPlaceholder public API and displays the response in a User Directory.

## Technologies Used

- Ionic Framework
- Angular
- TypeScript
- RxJS
- Angular HttpClient
- Capacitor
- Node.js
- npm

## API Used

JSONPlaceholder Users API:

https://jsonplaceholder.typicode.com/users

The API returns user information including:
- ID
- Name
- Username
- Email
- Address
- Phone
- Website
- Company

## Features Implemented

- Configured HttpClient using provideHttpClient()
- Created a TypeScript User interface
- Created UserService for API integration
- Implemented HTTP GET request
- Used Observable and RxJS
- Added automatic retry using retry(2)
- Added loading state
- Added API error handling
- Added manual retry button
- Added empty state
- Configured API URL using environment files
- Displayed 10 users using Ionic cards
- Added responsive SCSS styling

## Project Structure

```text
src/
├── app/
│   ├── home/
│   │   ├── home.page.html
│   │   ├── home.page.scss
│   │   └── home.page.ts
│   ├── models/
│   │   └── user.model.ts
│   ├── services/
│   │   └── user.service.ts
│   ├── app.component.ts
│   └── app.routes.ts
├── environments/
│   ├── environment.ts
│   └── environment.prod.ts
├── global.scss
├── index.html
└── main.ts
```

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

## Testing Results

- REST API request completed successfully.
- Successfully fetched 10 users.
- User information displayed in the Ionic application.
- Loading and error states implemented.
- Production build completed successfully.

## Learning Outcomes

- Understanding REST APIs
- Using Angular HttpClient
- Creating Angular services
- Understanding TypeScript interfaces
- Working with Observables and subscriptions
- Handling API loading and errors
- Using RxJS retry operator
- Managing environment configurations

## Training Progress

Day 6 - HTTP and REST API Integration: Completed
