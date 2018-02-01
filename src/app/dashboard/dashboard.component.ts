import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router){}

  name:string;
  email:string;
  myObject = localStorage.getItem('currentUser');
  ngOnInit() {
    var obj = JSON.parse(this.myObject);
    this.name = obj.user.name;
    this.email = obj.user.email;
  }

  signout()
  {
      localStorage.removeItem('currentUser');
      this.router.navigate(['login']);
  }
}
