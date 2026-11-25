
import { Component } from '@angular/core';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonInput,
  IonTextarea,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonNote,
} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    ReactiveFormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonInput,
    IonTextarea,
    IonSelect,
    IonSelectOption,
    IonButton,
    IonNote,
  ],
})
export class HomePage {

  feedbackMessage = '';

  taskForm = this.formBuilder.group({
    title: ['', Validators.required],
    description: [''],
    dueDate: ['', Validators.required],
    priority: ['Medium', Validators.required],
  });

  constructor(private formBuilder: FormBuilder) {}

  // Submit form
  onSubmit(): void {

    if (this.taskForm.invalid) {
      this.taskForm.markAllAsTouched();
      this.feedbackMessage = 'Please fill in all required fields.';
      return;
    }

    const task = this.taskForm.getRawValue();

    this.feedbackMessage =
      `Task "${task.title}" submitted successfully!`;

    console.log('Submitted Task:', task);

    this.resetFields();
  }

  // Reset form
  onReset(): void {
    this.resetFields();
    this.feedbackMessage = 'Form has been reset.';
  }

  // Cancel form
  onCancel(): void {
    this.resetFields();
    this.feedbackMessage = 'Task creation cancelled.';
  }

  // Common reset method
  private resetFields(): void {
    this.taskForm.reset({
      title: '',
      description: '',
      dueDate: '',
      priority: 'Medium',
    });
  }

}
