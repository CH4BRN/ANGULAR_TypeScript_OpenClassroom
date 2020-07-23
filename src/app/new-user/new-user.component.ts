import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../models/User.model';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  // Initialise le formulaire
  initForm() {
    // Group prend les clés correspondantes aux noms des controles et leurs valeurs par défaut.
    this.userForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
      drinkPreference: ''
    });
  }

  //  Soumet le formulaire
  onSubmitForm() {
    const formValue = this.userForm.value;
    const newUser = new User(
      formValue['firstName'],
      formValue['lastname'],
      formValue['email'],
      formValue['drinkPreference']
    );

    this.userService.addUser(newUser);
    this.router.navigate(['/users']);

  }

}
