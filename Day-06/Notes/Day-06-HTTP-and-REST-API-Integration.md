
# Day 6 - HTTP and REST API Integration

## 1. Objective

The objective of Day 6 is to understand how an Ionic application communicates with a REST API and displays data received from an external server.

A Users Directory application was developed using Ionic, Angular, TypeScript and HttpClient.

## 2. Technologies Used

- Ionic Framework
- Angular
- TypeScript
- RxJS
- Angular HttpClient
- Capacitor
- Node.js
- npm

## 3. What is an API?

API stands for Application Programming Interface.

An API allows two software applications to communicate with each other.

In this project, our Ionic application sends a request to an external API and receives user information.

## 4. What is a REST API?

REST stands for Representational State Transfer.

A REST API allows applications to communicate using HTTP methods.

Common HTTP methods:

| Method | Purpose |
|---|---|
| GET | Retrieve data |
| POST | Create new data |
| PUT | Update existing data |
| PATCH | Partially update data |
| DELETE | Delete data |

In this project, we used the GET method to retrieve users.

## 5. API Used

JSONPlaceholder Users API:

https://jsonplaceholder.typicode.com/users

The API returns 10 sample users.

Each user contains:

- ID
- Name
- Username
- Email
- Address
- Phone
- Website
- Company

The API response is received in JSON format.

## 6. Configuring HttpClient

Angular HttpClient is used to send HTTP requests to external APIs.

In a standalone Angular application, HttpClient is configured using provideHttpClient().

Import:

    import { provideHttpClient } from '@angular/common/http';

Add it to the application providers:

    provideHttpClient(),

This configuration makes HttpClient available through Angular dependency injection.

## 7. Creating a TypeScript Interface

An interface defines the structure of an object.

File:

    src/app/models/user.model.ts

The User interface defines the expected structure of user information.

Example:

    export interface User {
      id: number;
      name: string;
      username: string;
      email: string;
      phone: string;
      website: string;

      address: {
        city: string;
      };

      company: {
        name: string;
      };
    }

Using interfaces helps TypeScript check the structure of API data.

## 8. Creating an Angular Service

An Angular service contains reusable application logic.

File:

    src/app/services/user.service.ts

We created UserService to handle API communication.

Important concepts:

- Injectable: Makes the service available through dependency injection.
- HttpClient: Sends HTTP requests.
- Observable: Represents data that can arrive asynchronously.
- getUsers(): Retrieves the user list.

The service method:

    getUsers(): Observable<User[]> {
      return this.http.get<User[]>(this.apiUrl).pipe(
        retry(2)
      );
    }

The HTTP GET request retrieves the user list.

## 9. Understanding Observable

An Observable represents a stream of data that can arrive over time.

Angular HttpClient returns an Observable for HTTP requests.

To receive the response, we subscribe to the Observable.

Example:

    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (error) => {
        console.error(error);
      }
    });

- next executes when the request succeeds.
- error executes when the request fails.

## 10. Environment Configuration

Environment files store configuration values used by the application.

Files:

    src/environments/environment.ts
    src/environments/environment.prod.ts

Development configuration:

    export const environment = {
      production: false,
      apiUrl: 'https://jsonplaceholder.typicode.com/users'
    };

Production configuration:

    export const environment = {
      production: true,
      apiUrl: 'https://jsonplaceholder.typicode.com/users'
    };

In UserService, the API URL is accessed using:

    private apiUrl = environment.apiUrl;

This avoids hardcoding the API endpoint directly inside the service.

## 11. Loading State

A loading state informs users that the application is fetching data.

Property:

    isLoading: boolean = false;

Before sending the request:

    this.isLoading = true;

After receiving a successful response:

    this.isLoading = false;

The Ionic spinner is displayed using ion-spinner.

## 12. Error Handling

Error handling allows the application to respond when an API request fails.

Property:

    errorMessage: string = '';

Inside the error callback:

    error: (error) => {
      console.error('API Error:', error);

      this.errorMessage =
        'Unable to load users. Please try again.';

      this.isLoading = false;
    }

The application displays an error message and provides a Retry button.

## 13. Automatic Retry Using RxJS

The retry operator automatically resubscribes to an Observable when an error occurs.

Example:

    retry(2)

This allows two additional attempts after the initial request fails.

Therefore, the request can be attempted up to three times in total.

The application also provides a manual Retry button.

## 14. Displaying API Data in HTML

Angular template features were used to display the API response.

### Interpolation

Interpolation displays values inside HTML.

Example:

    {{ user.name }}

### *ngFor

The *ngFor directive repeats an HTML element for each item in an array.

Example:

    <ion-card *ngFor="let user of users">
      {{ user.name }}
    </ion-card>

### *ngIf

The *ngIf directive conditionally displays content.

It was used for:

- Loading state
- Error state
- Empty state
- Users list

## 15. Ionic UI Components Used

| Component | Purpose |
|---|---|
| ion-header | Creates the page header |
| ion-toolbar | Provides the toolbar |
| ion-title | Displays the page title |
| ion-content | Main page content |
| ion-card | Displays individual user information |
| ion-card-header | Displays card heading |
| ion-card-title | Displays user name |
| ion-card-content | Displays user details |
| ion-spinner | Shows loading animation |
| ion-button | Provides Retry and Refresh actions |

## 16. Change Detection

ChangeDetectorRef was used in the HomePage component to explicitly request a view update after receiving the API response or an error.

Import:

    import { ChangeDetectorRef } from '@angular/core';

Dependency injection:

    constructor(
      private userService: UserService,
      private cdr: ChangeDetectorRef
    ) {}

After receiving the API response:

    this.cdr.detectChanges();

## 17. SCSS Styling

The application was styled using SCSS.

Styling included:

- Page background
- Page heading
- User cards
- Card titles
- User information
- Loading and error states
- Buttons
- Responsive layout

The styling makes the Users Directory easier to read on mobile and desktop screens.

## 18. Application Workflow

1. The Ionic application starts.
2. HomePage initializes using ngOnInit().
3. loadUsers() is called.
4. UserService sends an HTTP GET request.
5. The external API returns user information.
6. The response is received through subscribe().
7. User data is stored in the users array.
8. Loading state is disabled.
9. User information is displayed using Ionic cards.

## 19. Testing Performed

### API Testing

The JSONPlaceholder endpoint was opened directly in the browser.

The API returned JSON data containing 10 users.

### Application Testing

Verified:

- User Directory heading displayed.
- API request completed successfully.
- 10 users were fetched.
- User names were displayed.
- Email addresses were displayed.
- Phone numbers were displayed.
- Cities were displayed.
- Company names were displayed.
- Website information was displayed.

### Console Testing

Successful API response was verified in the browser console.

Example:

    Users fetched successfully: (10) [...]

### Production Build Testing

Command:

    ionic build

Result:

    Application bundle generation complete.

The production build completed successfully.

An Angular Browserslist compatibility warning was displayed, but it did not prevent the build.

## 20. Troubleshooting During Setup

The initial project had dependency and source-file issues.

Issues encountered:

1. Missing semver package.
2. Incorrect esbuild dependency state.
3. Missing src directory in the relocated project.

Solutions:

- Reinstalled dependencies using npm install.
- Removed node_modules and performed a clean installation using npm ci.
- Located the original starter project's src directory.
- Restored the missing source files into the Day 6 project.
- Ran ionic serve and verified successful compilation.

## 21. Important Commands

Install dependencies:

    npm install

Start development server:

    ionic serve

Build application:

    ionic build

Open application:

    http://localhost:8100

## 22. Learning Outcomes

After completing Day 6, the following concepts were practiced:

- Understanding APIs and REST APIs.
- Understanding HTTP GET requests.
- Configuring Angular HttpClient.
- Creating TypeScript interfaces.
- Creating Angular services.
- Using dependency injection.
- Understanding Observables and subscribe().
- Displaying API response data.
- Implementing loading and error states.
- Using RxJS retry().
- Managing environment configurations.
- Building responsive Ionic interfaces.
- Testing a production build.

## 23. Day 6 Conclusion

Day 6 focused on HTTP and REST API Integration using Ionic and Angular.

A Users Directory application was developed successfully using the JSONPlaceholder API.

The application retrieves 10 users and displays their information using Ionic cards.

Loading, error handling, retry functionality and environment configuration were also implemented.

Status: DAY 6 COMPLETED
