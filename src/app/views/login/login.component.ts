import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitMe(formData) {
    console.log(formData);
    // this.loginService.loginUser().subscribe(
    //   res => { console.log(res)},  Successs
    //   err => { console.log(err)}
    // );
  }

}
