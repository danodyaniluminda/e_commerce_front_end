import { Component } from '@angular/core';
import {SAMPLE_USER_DATA, UserData} from "./user.model";
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  popup_header: any;
  addEditUserForm: any;
  add_user: boolean = false;
  edit_user: any;
  addEditUser: any;
  all_user_data: UserData[] = SAMPLE_USER_DATA;


  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.addEditUserForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      userType: ['', Validators.required],
      status: ['', Validators.required]
    })
    this.getAllUsers()
  }

  get rf() { return this.addEditUserForm.controls; }

  getAllUsers() {

  }


  // Popup windows enable for add new users
  addUserPopup() {
    this.add_user= true;
    this.edit_user = false;
    this.popup_header = "Add New User";
    this.addEditUserForm.reset();
    const modelDiv = document.getElementById('addEditUserModal');
    if(modelDiv!= null) {
      modelDiv.style.display = 'block';
    }

  }

  //Disable popup window
  closeModal() {
    this.addEditUserForm.reset();
    this.add_user= false;
    const modelDiv = document.getElementById('addEditUserModal');
    if(modelDiv!= null) {
      modelDiv.style.display = 'none';
    }
  }
  //Perform Add new user
  addNewUser() {
    this.addEditUser = true;
    if (this.addEditUserForm.valid) {
      // Perform user to back end
      const newUserData = this.addEditUserForm.value;
      console.log('New User Data:', newUserData);

      // Display success message using SweetAlert
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'New user added successfully!',
      });
      const modelDiv = document.getElementById('addEditUserModal');
      if(modelDiv!= null) {
        modelDiv.style.display = 'none';
      }

      // After adding the user, you might want to reset the form
      this.addEditUserForm.reset();
    } else {
      // If the form is not valid, display error message using SweetAlert
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Please fill in all required fields.',
      });
    }


  }

  editUserPopup(id: number) {

  }

  editUser(user_data: any) {
    this.edit_user = true;
    const modelDiv = document.getElementById('addEditUserModal');
    if(modelDiv!= null) {
      modelDiv.style.display = 'block';
    }
    this.popup_header = "Edit User";
    this.addEditUserForm.patchValue({
      name: user_data.name,
      username: user_data.username,
      userType: user_data.userType,
      status: user_data.status
    });
  }

  updateUser(): void {
    this.addEditUser = true;
    if (this.addEditUserForm.valid) {
      // Perform logic to update the user on the backend
      const updatedUserData = this.addEditUserForm.value;
      console.log('Updated User Data:', updatedUserData);

      // Display success message using SweetAlert
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'User updated successfully!',
      });

      // Close the modal
      const modalDiv = document.getElementById('addEditUserModal');
      if (modalDiv != null) {
        modalDiv.style.display = 'none';
      }

      // Reset the form and flags
      this.addEditUserForm.reset();
      this.addEditUser = false;
      this.edit_user = false;
    } else {
      // If the form is not valid, display error message using SweetAlert
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Please fill in all required fields.',
      });
    }}

  deleteUser(userId: number): void {

    console.log('Deleting user with ID:', userId);

  }
  goToDashboard(): void {
    this.router.navigate(['/admin-dashboard']); // Change '/dashboard' to the actual route of your dashboard
  }



}
