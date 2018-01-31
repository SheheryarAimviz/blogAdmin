import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidation } from '../../validation/password-validation';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  rForm: FormGroup;
  titleAlert:string = 'This field is required';
  titleAlert2:string = 'You need to specify at least 8 characters';

  constructor(private userService : UserService, private fb: FormBuilder) { }

  ngOnInit() {

    this.rForm = this.fb.group({
      'name' : [null, Validators.required],
      'email' : [null, Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])],
      'password' : [null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(500)])],
      'confirmPassword': [null, Validators.required],
      'address': [null, Validators.required],
      'contact': [null, Validators.required]
      }, {
      validator: PasswordValidation.MatchPassword
    });

  }

  addUser(value) {
    this.userService.register(value);
    this.rForm.reset();
  }

}
