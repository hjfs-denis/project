import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user: User = new User();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  goToRegister() {
    this.router.navigate(['eGalaxy/users/register']);
  }

}
