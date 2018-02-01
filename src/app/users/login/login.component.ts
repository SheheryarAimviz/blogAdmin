import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;
  titleAlert:string = 'This field is required';
  titleAlert2:string = 'You need to specify at least 8 characters';

  constructor(private router: Router, private userService : UserService, private fb: FormBuilder) { }

  ngOnInit() {

    if (localStorage.getItem('currentUser')) {
      this.router.navigate(['/dashboard']);
    }

    this.userForm = this.fb.group({
      'email' : [null, Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])],
      'password' : [null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(500)])],
    });

  }

  loginUser(value)
  {
    this.userService.login(value);
    this.userForm.reset();
  }
}
