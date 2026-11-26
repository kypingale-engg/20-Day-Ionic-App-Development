
import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonInput,
  IonItem,
  IonSpinner
} from '@ionic/angular';

import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
    IonInput,
    IonItem,
    IonSpinner
  ],
})
export class HomePage implements OnInit {

  users: User[] = [];

  isLoading = false;
  isSaving = false;

  deletingUserId: number | null = null;

  errorMessage = '';
  successMessage = '';

  userForm: Omit<User, 'id'> = {
    name: '',
    email: '',
    username: '',
    phone: '',
    website: ''
  };

  editingUserId: number | null = null;

  constructor(
    private userService: UserService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadUsers();
  }

  // READ - Fetch users
  loadUsers() {

    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.cdr.detectChanges();

    this.userService.getUsers().subscribe({

      next: (data) => {

        this.users = [...data];
        this.isLoading = false;

        console.log('Users loaded:', this.users);

        this.cdr.detectChanges();
      },

      error: (error) => {

        console.error('Fetch error:', error);

        this.errorMessage = 'Unable to load users. Please try again.';
        this.isLoading = false;

        this.cdr.detectChanges();
      }

    });
  }

  // CREATE and UPDATE
  saveUser() {

    const name = this.userForm.name.trim();
    const email = this.userForm.email.trim();

    if (!name || !email) {
      this.errorMessage = 'Name and email are required.';
      this.successMessage = '';
      this.cdr.detectChanges();
      return;
    }

    const userData: Omit<User, 'id'> = {
      ...this.userForm,
      name,
      email
    };

    this.isSaving = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.cdr.detectChanges();

    // CREATE - POST
    if (this.editingUserId === null) {

      this.userService.addUser(userData).subscribe({

        next: (response) => {

          const newUser: User = {
            ...userData,
            ...response
          };

          this.users = [
            newUser,
            ...this.users
          ];

          this.resetForm();

          this.successMessage = 'User added successfully!';
          this.isSaving = false;

          console.log('User added:', newUser);
          console.log('Updated user list:', this.users);

          this.cdr.detectChanges();
        },

        error: (error) => {

          console.error('Add user error:', error);

          this.errorMessage = 'Unable to add user.';
          this.isSaving = false;

          this.cdr.detectChanges();
        }

      });

    } else {

      // UPDATE - PUT
      const updatedUser: User = {
        ...userData,
        id: this.editingUserId
      };

      this.userService.updateUser(updatedUser).subscribe({

        next: (response) => {

          const savedUser: User = {
            ...updatedUser,
            ...response
          };

          this.users = this.users.map(user =>
            user.id === savedUser.id ? savedUser : user
          );

          this.resetForm();

          this.successMessage = 'User updated successfully!';
          this.isSaving = false;

          console.log('User updated:', savedUser);

          this.cdr.detectChanges();
        },

        error: (error) => {

          console.error('Update user error:', error);

          this.errorMessage = 'Unable to update user.';
          this.isSaving = false;

          this.cdr.detectChanges();
        }

      });
    }
  }

  // Select user for editing
  editUser(user: User) {

    this.editingUserId = user.id;

    this.userForm = {
      name: user.name,
      email: user.email,
      username: user.username ?? '',
      phone: user.phone ?? '',
      website: user.website ?? ''
    };

    this.errorMessage = '';
    this.successMessage = '';
  }

  // DELETE
  deleteUser(id: number) {

    this.deletingUserId = id;
    this.errorMessage = '';
    this.successMessage = '';

    this.userService.deleteUser(id).subscribe({

      next: () => {

        this.users = this.users.filter(
          user => user.id !== id
        );

        if (this.editingUserId === id) {
          this.resetForm();
        }

        this.successMessage = 'User deleted successfully!';
        this.deletingUserId = null;

        console.log('User deleted:', id);

        this.cdr.detectChanges();
      },

      error: (error) => {

        console.error('Delete user error:', error);

        this.errorMessage = 'Unable to delete user.';
        this.deletingUserId = null;

        this.cdr.detectChanges();
      }

    });
  }

  // Reset form
  resetForm() {

    this.userForm = {
      name: '',
      email: '',
      username: '',
      phone: '',
      website: ''
    };

    this.editingUserId = null;
  }

  // Cancel editing
  cancelEdit() {

    this.resetForm();

    this.errorMessage = '';
    this.successMessage = '';
  }

}
