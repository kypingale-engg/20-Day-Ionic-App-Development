# Ionic Day 5 – Reactive Forms and Validation

## Project Overview

This project is developed as part of the 20-Day Ionic App Development Training Program.

Day 5 focuses on Angular Reactive Forms and form validation using Ionic UI components.

The application provides a Task Management form where users can enter task details, validate required fields, submit the form, reset it, or cancel task creation.

## Technologies Used

- Ionic Framework
- Angular
- TypeScript
- Reactive Forms
- HTML
- SCSS
- Capacitor

## Features Implemented

- Task creation form
- Reactive Forms using FormGroup
- Required-field validation
- Validation error messages
- Task title input
- Task description input
- Due date selection
- Priority selection (Low, Medium, High)
- Submit Task functionality
- Reset Form functionality
- Cancel functionality
- Success and error feedback messages
- Basic accessibility support

## Form Fields

| Field | Validation |
|---|---|
| Task Title | Required |
| Description | Optional |
| Due Date | Required |
| Priority | Required, default value: Medium |

## Project Structure

```text
src/
└── app/
    └── home/
        ├── home.page.html
        ├── home.page.scss
        └── home.page.ts
```

## How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/kypingale-engg/20-Day-Ionic-App-Development.git
```

### 2. Navigate to the Project Folder

```bash
cd 20-Day-Ionic-App-Development/Day-05/Code/ionic-day5-starter
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Application

```bash
ionic serve
```

The application will run locally. Open the URL displayed in the terminal.

## Validation Testing

The following test cases were checked:

- Submitting an empty form displays required-field errors.
- Submitting without a task title displays a title validation error.
- Submitting without a due date displays a due date validation error.
- Submitting valid details displays a success message.
- Reset clears the form and restores the default priority.
- Cancel clears the form and displays a cancellation message.
- Description can be left empty.

## Learning Outcomes

- Understanding Angular Reactive Forms.
- Creating and managing form controls.
- Applying built-in Angular validators.
- Displaying validation messages.
- Handling form submission.
- Implementing Reset and Cancel functionality.
- Understanding basic accessibility in forms.

## Important Note

Submitted task details are currently displayed in the browser console. Database integration and permanent data storage are not implemented.

## Training Progress

**Day 5: Completed – Reactive Forms and Validation**