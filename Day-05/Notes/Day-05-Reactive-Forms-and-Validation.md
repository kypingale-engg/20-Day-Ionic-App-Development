# Day 5 – Reactive Forms and Validation

## 1. Project Overview

Day 5 focuses on building a task management form using Ionic Angular Reactive Forms.

The form allows users to enter task details, validate required fields, submit tasks, reset the form, and cancel task creation.

## 2. Technologies Used

- Ionic Framework
- Angular
- TypeScript
- Reactive Forms
- HTML
- SCSS

## 3. Learning Objectives

- Understand Angular Reactive Forms.
- Create forms using FormGroup and FormControl.
- Apply built-in validators.
- Display validation error messages.
- Handle form submission.
- Implement Reset and Cancel functionality.
- Understand basic form accessibility.

## 4. Concepts Learned

### A. Reactive Forms

Reactive Forms are used to manage form data and validation in Angular.

They allow us to define form controls and validation rules in the TypeScript file.

### B. FormGroup

FormGroup is used to group multiple form controls together.

In this project, the task form contains:

- Task Title
- Description
- Due Date
- Priority

### C. Validators

Angular provides built-in validators to validate user input.

We used:

- `Validators.required` – Makes a field mandatory.

### D. Form Validation

Form validation checks whether the user has entered the required information.

In this project:
- Task Title is required.
- Due Date is required.
- Description is optional.
- Priority is set to Medium by default.

### E. Form Submission

The `onSubmit()` method checks whether the form is valid.

If the form is invalid, error messages are displayed.

If the form is valid, the task details are displayed in the browser console and a success message appears.

### F. Reset and Cancel

- **Reset:** Clears the form and restores the default priority.
- **Cancel:** Clears the form and displays a cancellation message.

## 5. Features Implemented

1. Task creation form.
2. Required-field validation.
3. Validation error messages.
4. Task description input.
5. Due date selection.
6. Priority selection (Low, Medium, High).
7. Submit Task button.
8. Reset Form button.
9. Cancel button.
10. Success and error feedback messages.

## 6. Project Structure

```text
Day-05/
├── Code/
│   └── ionic-day5-starter/
│       └── src/
│           └── app/
│               └── home/
│                   ├── home.page.html
│                   ├── home.page.scss
│                   └── home.page.ts
├── Notes/
│   └── Day-05-Reactive-Forms-and-Validation.md
└── Screenshots/
```

## 7. How to Run the Project

1. Open the project folder in VS Code.
2. Open the terminal.
3. Install dependencies:

```bash
npm install
```

4. Start the Ionic application:

```bash
ionic serve
```

5. Open the local URL displayed in the terminal.

## 8. Manual Testing

| Test Case | Expected Result |
|---|---|
| Submit an empty form | Required-field errors appear |
| Enter only task title | Due date validation appears |
| Enter only due date | Task title validation appears |
| Enter all required fields | Success message appears |
| Click Reset | Form clears and priority returns to Medium |
| Click Cancel | Form clears and cancellation message appears |
| Leave description empty | Form can still be submitted |

## 9. Learning Outcome

Successfully created a task management form using Ionic Angular Reactive Forms.

Learned how to manage form controls, apply validation, display error messages, submit form data, and implement reset and cancel functionality.

**Note:** This project currently displays submitted task details in the browser console. It does not save tasks to a database.

---

**Day 5 Status: Completed – Reactive Forms and Validation**