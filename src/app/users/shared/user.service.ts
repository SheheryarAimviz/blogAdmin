import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class UserService {

  selectedUser : User;

  userid:string;
  constructor(private toastr: ToastrService, private router: Router, private httpClient: HttpClient) { }

  login(user : User)
  {
      this.httpClient.post('http://site.startupbug.net:6888/api/v1/public/api/user-login', user).subscribe(
       res => {

          if(res == "unauthorize"){
            this.toastr.error('Email Address and Password in Invalid','User');
          }
          else
          {
            localStorage.setItem('currentUser', JSON.stringify(res));
            this.router.navigate(['/dashboard']);
            this.toastr.success('Login Successfully','User');
          }
       },
       err => {
         this.toastr.error('Email Address and Password in Invalid','User');
       }
     );
  }

  register(user : User)
  {
      this.httpClient.post('http://site.startupbug.net:6888/api/v1/public/api/user-register', user).subscribe(
       res => {
           localStorage.setItem('currentUser', JSON.stringify(res));
           this.router.navigate(['/dashboard']);
           this.toastr.success('New Record Added Successfully','User Register');
       },
       err => {
         this.toastr.error('Email Address and Password in Invalid','User');
       }
     );
  }
}
